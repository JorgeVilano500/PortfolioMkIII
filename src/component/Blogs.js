import React, {useState} from 'react';
import AddBlog from './AddBlog';
import Popup from './Popup/Popup';
import { useStateContext } from '../context/UserContext';

function Blogs({homepage, date, title, blog, popup1, setPopup1}) {
    const {
        loginStatus
    } = useStateContext();

    const infoDate = new Date(date);
    const day = infoDate.getDate(); 
    const month = infoDate.getMonth() + 1; 
    const year = infoDate.getFullYear();
    const fullDate = `${month}/${day}/${year}`;
    const [buttonPopup1, setButtonPopup1] = useState(false);
    
    const [buttonPopup2, setButtonPopup2] = useState(false);
    
  return (
    <div className='card text-center bg-dark text-white w-75 m-3'>
        <div className='card-header'>
            {title}
        </div>
        <div className='card-body'>
            <blockquote>
                <h4 className='card-subtitle mb-2 text-muted'>What I was Thinking:</h4>
                <div className='te'>
                    <p className='d-inline-block card-text text-ellipsis'>
                        {blog}
                    </p>
                </div>
                
            </blockquote>
            <button className='btn-sm btn-outline-secondary btn-block' onClick={() => setButtonPopup1(true)}>More Info</button>
                <Popup trigger={buttonPopup1} setTrigger={setButtonPopup1} >
                    <h1>Date: {fullDate}</h1>
                    <h2>Title: {title}</h2>
                    <h2>Blog: {blog}</h2>
                </Popup>
                {/* {homepage === false ? ( */}
                {/* ) : ''} */}

                {loginStatus ? ( 
                <button className='btn-sm btn-outline-secondary btn-block' onClick={() => setButtonPopup2(true)}>Add Blog</button>

                ) : ''}
                    <Popup trigger={buttonPopup2} setTrigger={setButtonPopup2}>
                        <h1>Test</h1>
                        <AddBlog />
                    </Popup>

        </div>
            <footer className='card-footer text-muted m-0'>{fullDate}</footer>
    </div>
  )
}

export default Blogs

//                        <button onClick={() => {set(false)}} id='close-btn' className='btn-primary' style={{borderRadius: '20px'}} >Add Blog</button>
