import React, {useState, useEffect} from 'react'
import Blogs from '../component/Blogs'
import { useStateContext } from '../context/UserContext'


function PublicBlogs() {
  const {loginStatus, username} = useStateContext();
  let [publicBlogs, setPublicBlogs] = useState([])


  useEffect( () => {
    const fetchPublicBlogs = async () => {
      let result = await fetch('https://test-javswebsite.herokuapp.com/Public-Blogs',{
        method: 'post', 
        header: {
          'Accept': 'application/json', 
          'Content-Type': 'application/json'
        }
      })
  
      let res = await result.json(); 
      // console.log(res); 
  
      setPublicBlogs(res.reverse());
    }

    const fetchPrivateBlogs = async () => {
      let result = await fetch('https://test-javswebsite.herokuapp.com/getBlogs',{
        method: 'post', 
        header: {
          'Accept': 'application/json', 
          'Content-Type': 'application/json'
        }
      })
  
      let res = await result.json(); 
      // console.log(res); 
      setPublicBlogs(res.reverse())
  
    }

    
    if(username != 'Alejandro') {
      fetchPublicBlogs()
    } else{
      fetchPrivateBlogs();
    }

    // callFunction();
    
  }, [])


  return (
    <div className='my-4 ' >
      <h1>Ale's Public Blogs</h1>
      <div className='d-flex row mt-3 mx-5 justify-content-center align-self-center align-items-center '>
      {publicBlogs.map((item, index) => {
          return (
            <div className='col-xxl-2 col-xl-3 col-lg-3 col-md-3 col-sm-5 col-12 mx-1'>
              <Blogs 
                homepage={true} 
                date={item.date}
                title={item.blog}
                blog={item.description}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PublicBlogs