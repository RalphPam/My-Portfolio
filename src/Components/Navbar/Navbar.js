import React from 'react'
import './Navbar.scss'

function Navbar() {
   return (
      <div className='navbar-wrapper'>
         <nav>
            <div className='list'>
               <ul>
                  <a href='#header'>
                     <li>About</li>
                  </a>
                  <a href='#skills'>
                     <li>Skills</li>
                  </a>
                  <a href='#projects'>
                     <li>Projects</li>
                  </a>
                  <a href='#contact'>
                     <li>Contact</li>
                  </a>
               </ul>
            </div>
            <div className='accounts'>
               <ul>
                  <a
                     href='https://www.linkedin.com/in/ralph-nest-pamintuan-6a24071b8/'
                     target='blank'
                  >
                     <li>
                        <i className='fab fa-linkedin-in'></i>
                     </li>
                  </a>
                  <a href='https://github.com/RalphPam' target='blank'>
                     <li>
                        <i className='fab fa-github'></i>
                     </li>
                  </a>
                  <a
                     href='https://www.facebook.com/ralphnest.pamintuan/'
                     target='blank'
                  >
                     <li>
                        <i className='fab fa-facebook'></i>
                     </li>
                  </a>
               </ul>
            </div>
         </nav>
      </div>
   )
}

export default Navbar
