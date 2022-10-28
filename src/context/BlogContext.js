import React, {useContext, createContext, useState, useEffect} from 'react'
import Axios from 'axios'

export const BlogStateContext = createContext();


export const BlogContext = ({children}) => {
    const [blog, setBlog] = useState('')
    const [blogTitle, setBlogTitle] = useState('')
    const [publicBlog, setPublicBlog] = useState(0) 
    const [quoteHeader, setQuoteHeader] = useState('')
    const [quoteBody, setQuoteBody] = useState('')

    async function addBlog() {
        try {
            let res = await fetch('https://test-javswebsite.herokuapp.com/addBlog', {
                method: 'post', 
                headers: {
                    'Accept': 'application/json', 
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ // gotta convert object to json 
                    topic: blogTitle, 
                    description: blog, 
                    public: publicBlog
                })
            })
            let result = await res.json(); // gotta convert json to js object
            if(result.msg === 'blog added') {
                window.location.reload('/');
            }
        } catch(e) {
            console.log(e)
        }
    }

    function setInputValue(property, val) {
        property(val)
    }

    async function addQuote() {
        try {
            let res = await fetch('https://test-javswebsite.herokuapp.com/addQuote', {
                method: 'post', 
                headers: {
                    'Accept': 'application/json', 
                    'Content-Type': 'application/json'
                }, 
                body : JSON.stringify({
                    Quote: quoteBody, 
                    Header: quoteHeader
                })
            })
            let result = await res.json(); 
            window.location.reload('/')
        } catch(e) {
            console.log(e)
        }
    }

    return (
        <BlogStateContext.Provider 
        value={{
            blog, setBlog, 
            blogTitle, setBlogTitle, 
            publicBlog, setPublicBlog, 
            addBlog, setInputValue,
            addQuote, 
            quoteHeader, setQuoteHeader, 
            quoteBody, setQuoteBody   
        }}>
            {children}
        </BlogStateContext.Provider>
    )

}


export const useBlogStateContext = () => useContext(BlogStateContext);