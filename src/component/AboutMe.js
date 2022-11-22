import React, {useEffect} from 'react'
import Dapp from '../assets/dappexample.png';
import MomsEx from '../assets/momswebsite.png';
import PrevWebsite from '../assets/WebsiteMkII.png';
import '../App.css'


function AboutMe() {

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting) {
                    entry.target.classList.add('show')
                } else {
                    entry.target.classList.remove('show')
                }
            })
        })
        const hiddenElements = document.querySelectorAll('.hidden')
        
        hiddenElements.forEach((el) => observer.observe(el))
        

    }, [])



   
  return (
    <div className='text-white'>
   

        <section className='aboutMe hidden'>
            <h1>Welcome to my bio</h1>
            <p>I will explain who I am, some of my history and my goals that I want to accomplish in the next 5 years. In that order.</p>
        </section >
        <section className='aboutMe hidden'>
            <h1>I am 23 years old, live in the Bay Area and go to the University of California Davis.</h1>
            <p>I was going to attend UC Davis for my last year but unfortunately I had an injury that required me to get surgery. I am doing this in the meantime. </p>
        </section>
        <section className='aboutMe hidden'>
            <h1>I'm Salvadoran and come from a low income neighborhood</h1>
            <p>I didn't have many opportunities to learn about many skills that could help me out. However I found codecademy and the internet to be a great resource. I am a self taught coder</p>
        </section>
        <section className='aboutMe hidden'>
            <h1>My goals for this website</h1>
            <p>I want this website to display the skills I am able to perform while on the job. I am hoping this gets the attention of a recruiter for either an internship or job opportunity. <br />I am eager to learn more about the industry and get into make projects for a company.</p>
        </section>
        <section className='aboutMe hidden '>
            <h1>Example Websites I've Made</h1>
            <div className='logos d-flex '>
                <div className='logo hidden d-inline'>
                    <h5>Decentralized App</h5> <br />
                    <a  href='https://javastudiosdapp.netlify.app/' target='_blank' >
                        <img src={Dapp} style={{height: '200px', width: '400px'}} />
                    </a>
                </div>
                <div className='logo hidden d-inline'>
                    <h5>Ecommerce Site</h5><br />
                <a href='https://aidashandmadecreations.netlify.app/' target='_blank'>
                        <img src={MomsEx} style={{height: '200px', width: '400px'}} />
                    </a>
                </div>
                <div className='logo hidden d-inline'>
                    <h5>Previous Portfolio Website</h5><br />
                <a href='https://musical-mooncake-57356b.netlify.app/' target='_blank'>
                        <img src={PrevWebsite} style={{height: '200px', width: '400px'}} />
                    </a>
                </div>
                
            </div>

        </section>
        
    </div>
    
  )
}

export default AboutMe