import React from 'react'
import './Navbar.scss'

function Navbar() {
    return (
        <div className='navbar-wrapper'>
            <nav>
                <div className='list'> 
                    <ul>
                        <a href='#certificates'><li>About</li></a>
                        <a href='#skills'><li>Contact</li></a>
                        <a href=''><li>Skills</li></a>
                    </ul>
                </div>
                <div className='accounts'>
                    <ul>
                        <a href='in'><li><i className="fab fa-linkedin-in"></i></li></a>
                        <a href='https://github.com/RalphPam' target='blank'><li><i className="fab fa-github"></i></li></a>
                        <a href='https://www.facebook.com/ralphnest.pamintuan/' target='blank'><li><i className="fab fa-facebook"></i></li></a>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar