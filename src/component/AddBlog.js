import React, {useState} from 'react'
import {useBlogStateContext} from '../context/BlogContext'
import SubmitButton from './SubmitButton'
import InputField from './InputField'

function AddBlog() {
    const {
        blog, setBlog, 
        blogTitle, setBlogTitle, 
        publicBlog, setPublicBlog, 
        addBlog, setInputValue
    } = useBlogStateContext();
    const [topic, setTopic] = useState('')


  return (
    <div >
        <h2>Whats the Topic Today</h2>
        <InputField
        type='text'
        placeholder='Topic Today' 
        value={blogTitle ? blogTitle: ''}
        onChange={e => setBlogTitle(e.target.value)}
/>
        <h2>Describe How You Feel</h2>

        <textarea className='inputField' autoCorrect='on' style={{height: '100px', width: '400px'}} onChange={e => setBlog(e.target.value)} value={blog ? blog: ' '}> 
           Describe Today
        </textarea>

        
{/* This is where the blog will be set for public or private use. checked will mean the radio is checked when the statement is true inside of the {} */}
    <div className='d-flex text-center justify-content-center m-2 p-2 '>
        <div className='m-2'>
            <input className='mx-2' type='radio' id='public' checked={publicBlog=== 0} onClick={() => {
                if(publicBlog === 1) {
                    setPublicBlog(0)

                }
                return;
                }} /> <br />
            <label htmlFor='public'>Set Public</label>
        </div>
        <div className='m-2'>
            <input className='mx-2' type='radio' id='private' checked={publicBlog === 1} onClick={() => {
                if(publicBlog === 0) {
                    setPublicBlog(1)
                }
                
                }} /> <br />
            <label htmlFor='private'>Set Private</label>
        </div>
        </div>

        <SubmitButton
            text='Add Blog'
            disabled={false}
            onClick={ () => addBlog()}
        />
    </div>
  )
}

export default AddBlog