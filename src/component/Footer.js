import React from 'react'
import {faFacebook, faLinkedin, faInstagram, faYoutube, faGithub, faGit} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
  return (
    <div className='container footer'>
        {/* Footer */}
        {/* <ul className='wrapper'>
            <li className='icon facebook'>
                <span className='tooltip'>Facebook</span>
                <span><i className='fab fa-facebook-f'></i></span>
            </li>
        </ul> */}
        <div className='singleCol social-media-icons-white d-flex justify-content-evenly'>
          <a href='https://github.com/JorgeVilano500?tab=repositories' target='_blank'>
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href='https://www.instagram.com/java_nft_studios/' target='_blank'>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href='https://LinkedIn.com' target='_blank'>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>

    </div>
  )
}

export default Footer