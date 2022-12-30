import React, {useEffect, useState} from 'react'

function KanbanHistory() {
    let [kanbanHistory, setKanbanHistory] = useState();

    useEffect(() => {
        async function fetchKanbanHistory() {
            let response = await fetch('https://test-javswebsite.herokuapp.com/kanbanHistory', {
                method: 'post', 
                headers: {
                    'Accept': 'application/json', 
                    'Content-Type': 'application/json'
                }
            })

            let res = await response.json();

            console.log(res)



        }
        fetchKanbanHistory();
    }, [])


  return (
    <div class="card mt-3  mb-3" style={{maxWidth: '350px'}}>
        
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  
</div>
  )
}

export default KanbanHistory