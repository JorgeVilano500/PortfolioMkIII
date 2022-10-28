import './App.css';
import Navbar from './component/Navbar';
import {Route, Routes} from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import PublicBlogs from './pages/PublicBlogs';
import Login from './pages/Login';
import Register from './pages/Register';
import Kanban from './pages/Kanban';
import axios from 'axios';
import {BlogContext} from './context/BlogContext'
import MobileNavbar from './component/MobileNavbar';
import AboutMe from './component/AboutMe';

axios.defaults.withCredentials = true;

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className='d-none d-sm-block'>
        <Navbar />
        </div>
        <div className='	d-block d-sm-none'>
          <MobileNavbar />
        </div>
      {/* <body>
        <h1>Hello Alejandro</h1>
      </body> */}
      <Routes>
          <Route exact path='/' element={<LandingPage />} />
          <Route exact path='/PublicBlogs' element={
            <BlogContext>
              <PublicBlogs />
            </BlogContext>
          
          } />
          <Route exact path='/Login' element={
            <BlogContext>
              <Login />
              </BlogContext>} />
          <Route exact path='/Register' element={<Register />} />
          <Route exact path='/Kanban' element={<Kanban />} />
          <Route exact path='/AboutMe' element={<AboutMe />} />
      </Routes>
      </header>
    </div>
  );
}

export default App;
