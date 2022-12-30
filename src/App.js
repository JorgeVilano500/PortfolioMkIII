import './App.css';
import { useContext } from 'react';
import Navbar from './component/Navbar';
import {Route, Routes, Navigate} from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import PublicBlogs from './pages/PublicBlogs';
import Login from './pages/Login';
import Register from './pages/Register';
import Kanban from './pages/Kanban';
import axios from 'axios';
import {BlogContext} from './context/BlogContext'
import MobileNavbar from './component/MobileNavbar';
import AboutMe from './component/AboutMe';
import CalendarComponent from './component/Calendar';
import AddToMessageBoard from './component/AddToMessageBoard';
import WeatherPage from './pages/Weather';
import SocialMedia from './pages/SocialMedia';
import {TransactionProvider} from './context/TransactionContext';
import Footer from './component/Footer';
import Resume from './component/Resume';
import Spotify from './pages/Spotify';
import Goals from './pages/Goals';
import AddToKanban from './component/AddToKanban';
import MessageList from './component/MessageList';

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
          {/* <Route exact path='/Register' element={<Register />} /> */}
          <Route exact path='/Kanban' element={<Kanban />} />
          <Route exact path='/AboutMe' element={<AboutMe />} />
          <Route exact path='/Calendar' element={<CalendarComponent />} />
          <Route exact path='/Weather' element={<WeatherPage />} />
          <Route exact path='/Resume' element={<Resume />} />
          <Route exact path='/Media' element={
            <TransactionProvider>
              <SocialMedia />
            </TransactionProvider>
          } />
          <Route exact path='/Test' element={<AddToMessageBoard />} />
          <Route exact path='/Spotify' element={<Spotify />} />
          <Route exact path='/Goals' element={<Goals />} />
          <Route exact path='/MessageList' element={<MessageList />} />
          <Route path='*' element={<Navigate to='/' />} /> 
      </Routes>
      <Footer />
      </header>
    </div>
  );
}

export default App;
