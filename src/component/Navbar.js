import React from 'react' 
import {Link} from 'react-router-dom';
import Video from '../assets/video.mp4';
import { useStateContext } from '../context/UserContext';
import '@popperjs/core'

function Navbar() {

    const {loginStatus, username} = useStateContext();
    // console.log('loginstatus', loginStatus)
  return (
    <div className='container gradient-border' style={{background: 'rgba( 255, 255, 255, 0.18 )'}}>
        <div className='d-flex justify-content-between align-items-center '>
            <section className='showcase'>
                <video src={Video} autoPlay loop muted type='video/mp4'></video>
                 <h1 className='title'>JAVA Studios</h1>
            </section>
            <div>
            <ul className='navbar-nav flex-row mr-auto p-3 '>
                <li className='nav-item m-2'>
                    <Link className='nav-link' to='/'>Home</Link>
                    </li>
                <li className='nav-item m-2'>
                    <Link className='nav-link' to='/PublicBlogs'>Public Blogs</Link>
                </li>
                <li className='nav-item m-2'>
                    <Link className='nav-link' to='/Resume'>Resume</Link>
                </li>
                <li className='nav-item m-2'>
                    <Link className='nav-link' to='/AboutMe'>About Me</Link>
                </li>
                <li className='nav-item m-2'>
                    <Link className='nav-link' to='/Login'>Login</Link>
                </li>
                {
                  username != 'Liz' ? '' : <li className='nav-item m-2'><Link className='nav-link' to='/MessageList'>Messages</Link></li>
                }
               {loginStatus ? (
                 <li className="nav-item dropdown mt-2">
                 <button  className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                   Dropdown
                 </button>
                 <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                   <Link className='dropdown-item' to='/Calendar'>Calendar</Link>
                   <Link className="dropdown-item" to='/Kanban'>Kanban</Link>
                   <div className="dropdown-divider"></div>
                   <Link className="dropdown-item" to="/Goals">Daily Goals/Reminders</Link>
                 </div>
               </li>
               ) :''}
            </ul>
            </div>

        </div>
    </div>
  )
}

export default Navbar