import React, {useState, useEffect, useLayoutEffect} from 'react'
import parse from 'date-fns/parse'; 
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay'; 
import 'react-big-calendar/lib/css/react-big-calendar.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// this is how the date function has the months in order starting from 0 
let months = ['January', 'February', 'March', 'April','May',  'June', 'July', 'August', 'September', 'October', 'November', 'December']



function AddCalendarItem() {
    const [newEvent, setNewEvent] = useState({title: '', start: '', end: ''})
    // const [allEvents, setAllEvents] = useState(events)

    function handleEvent() {
        // will send an api call to the JAVS api to create a new instance of the data in the db
        // setAllEvents([newEvent]) // will spread current events and add new event to the array 
        let result = fetch('https://test-javswebsite.herokuapp.com/addCalendarItem', {
            method: 'post', 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({
                title: newEvent.title, 
                start: newEvent.start, 
                end: newEvent.end, 
                allDay: true // later on I will be more detailed in what data is sent for the calendar to be as specific as possible. 
            })
        })

        setNewEvent({title: '', start: '', end: ''})
    }

    // useEffect(()=>{
    //     console.log('use effect')
    // }, [])

    // useLayoutEffect(()=>{
    //     console.log('use effect layout')
    // }, [])

  return (
    <div>
          <h1>Calendar</h1>
        <h2>Add New Events</h2>
        <div>
            <input type='text' placeholder='Add Title' style={{width: '20%', marginRight: '10px'}} value={newEvent.title} onChange={e => setNewEvent({...newEvent, title: e.target.value})} />
            <DatePicker placeholderText='Start Date' style={{marginRight: '10px'}} selected={newEvent.start} onChange={(start) => setNewEvent({...newEvent, start})} />
            <DatePicker placeholderText='End Date' selected={newEvent.end} onChange={(end) => setNewEvent({...newEvent, end})} />
            <button style={{marginTop: '10px'}} onClick={handleEvent}>Add Event</button>
            
        </div>
    </div>
  )
}

export default AddCalendarItem