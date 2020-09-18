import React, { useState } from 'react'
import './Contact.scss'

function Contact() {
    const [toggle, setToggle] = useState(false)
    const [firstLoad, setFirstLoad] = useState(false)
    return (
        <div className='contact-container'>
            <span id='contact'></span>
            <button 
                className={'contact-btn' + (firstLoad ? toggle? '-maximize' : '-minimize' : '')}
                onClick={() => {setToggle(!toggle); setFirstLoad(true)}}
            ><span className='bracket'>{'{'}</span>Contact<span className='bracket'>{'}'}</span></button>
            <div className={'contact' + (firstLoad ? toggle? '-maximize' : '-minimize' : '')}>
                <ul className='contact-list'>
                    <li><i className="fas fa-mobile-alt"></i> +63 961 246 1341</li>
                    <li><i className="far fa-envelope"></i> pralphnest@gmail.com</li>
                    <a 
                        className='resume' 
                        href='https://drive.google.com/uc?export=download&id=1KaTE-oF70qTXRnhTrsAhFRSy5eNwTnp9' 
                        target='blank'
                    >
                        <li><i className="far fa-file"></i> Resume</li>
                    </a>
                </ul>
            </div>
            <span className='dirC'>{toggle? <i className="fas fa-caret-up"></i> : <i className="fas fa-caret-down"></i>}</span>
        </div>
    )
}

export default Contact
