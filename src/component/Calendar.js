import React, {useState, useEffect} from 'react'
import format from 'date-fns/format'; 
import {Calendar, dateFnsLocalizer} from 'react-big-calendar'
import parse from 'date-fns/parse'; 
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay'; 
import 'react-big-calendar/lib/css/react-big-calendar.css';
import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker';


const locales = {
    'en-US': require('date-fns/locale/en-US')
}
const localizer = dateFnsLocalizer({
    format, 
    parse, 
    startOfWeek, 
    getDay, 
    locales
})

const events = [
    {
        title: 'Moms Bday', 
        allDay: true, 
        start: new Date(2022, 9, 31), 
        end: new Date(2022, 9, 31)
    },
    {
        title: 'Finish Website', 
        allDay: true, 
        start: new Date(2022, 9, 20), 
        end: new Date(2022, 9, 21)
    },
    {
        title: 'Erikas Bday', 
        allDay: true, 
        start: new Date(2022, 10, 7), 
        end: new Date(2022, 10, 7)
    }
]

function CalendarComponent() {
    let [allEvents, setAllEvents] = useState([])

    function filterEvents(arr) {
        for(let i in arr) {
            for (let j in i) {
                if(j === 'id') {
                    delete i[j];
                }
            }
        }
    }

    // function addHours(date, hours) {
    //     date.setHours(date.getHours() + hours);
    //     return date;
    // }

    // function filterDate() {
    //    let newTime = allEvents.forEach(element => {
    //         element.start = addHours(element.start, 12)
    //         element.end = addHours(element.end, 12)
    //     })
    //     setAllEvents(newTime)
    // }

    useEffect(() => {
        // console.log(new Date(2022, 9, 10))
        const fetchCalendarData = async () => {
            try{
                let result = await fetch('https://test-javswebsite.herokuapp.com/calendarItems', {
                    method: 'post', 
                    headers: {
                        'Accept' : 'application/json',
                        'Content-Type': 'application/json' 
                    }
                })
                let res = await result.json();
                // console.log(res);
                setAllEvents(res);
                // console.log(filterEvents(result))
                console.log(allEvents)

            } catch (e) {
                console.log(e)
            }
        }
        fetchCalendarData();
        // console.log(allEvents)

    }, [])
    const [newEvent, setNewEvent] = useState({title: '', start: '', end: ''})

    function handleEvent() {
        setAllEvents([...allEvents, newEvent]) // will spread current events and add new event to the array 
    }


  return (
    <div>
       
       
        {/* accessors see the object name and place when the event should start and end. */}
        <Calendar localizer={localizer} events={allEvents} startAccessor='start' endAccessor='end' style={{height: 500, margin: '50px'}}  />
    </div>
  )
}

export default CalendarComponent
