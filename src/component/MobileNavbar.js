import React from 'react'
import {Link} from 'react-router-dom'
import { useStateContext } from '../context/UserContext'

function MobileNavbar() {
  const {loginStatus} = useStateContext();
  return (
    <nav className='navbar navbar-expand-lg navbar-light '>
      <div className='container-fluid gradient-border mt-0' style={{background: 'rgba( 255, 255, 255, 0.18 )'}}>
        <a className='navbar-brand'>JAVA Studios</a>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNavDropdown' aria-controls='navbarNavDropdown' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavDropdown'>
          <ul className='navbar-nav d-inline-flex '>
            <li className='nav-item dropdown'>
              <a><Link to='/'>Home</Link></a>
            </li>
            <li className='nav-item dropdown'>
              <a><Link to='/PublicBlogs'>Public Blogs</Link></a>
            </li>
            <li className='nav-item dropdown'>
              <a><Link to='/Resume'>Resume</Link></a>
            </li>
            <li className='nav-item dropdown'>
              <a><Link to='/AboutMe'>About Me</Link></a>
            </li>
            <li className='nav-item dropdown'>
              <a><Link to='/Login'>Login</Link></a>
            </li>
            {loginStatus ? (
                 <li className="nav-item dropdown mt-2">
                 <button  className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                   More Features
                 </button>
                 <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                   <Link className="dropdown-item" to='/Calendar'>Calendar</Link>
                   <Link className="dropdown-item" to='/Kanban'>Kanban</Link>
                   <div className="dropdown-divider"></div>
                   <a className="dropdown-item" href="#">Something else here</a>
                 </div>
               </li>
               ) :''}

          </ul>

        </div>

      </div>
      
    </nav>
  )
}

export default MobileNavbar