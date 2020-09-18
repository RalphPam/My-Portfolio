import React, { useState } from 'react'
import './Certificate.scss'

function Certificates() {
    const [toggle, setToggle] = useState(false)
    const [firstLoad, setFirstLoad] = useState(false)
    const [right ,setRight] = useState([55,15,-25])
    const [opacity, setOpacity] = useState([0,0,0])
    const leftHandler = () => {
        setRight(prev => [...prev.slice(1), prev[0]])
        setOpacity(prev => [...prev.slice(1), prev[0]])
    }
    const rightHandler = () => {
        setRight(prev => [prev[2], ...prev.slice(0,2)])
        setOpacity(prev =>  [prev[2], ...prev.slice(0,2)])    
    }
    return (
        <div className='cert-container' id='certificates'>
            <button 
                className={'cert-btn' + (firstLoad ? toggle? '-maximize' : '-minimize' : '')}
                onClick={() => {setToggle(!toggle); !toggle && setRight([55,15,-25]); setFirstLoad(true); setOpacity([0,1,0])}}
            ><span className='bracket'>{'{'}</span>Certificates<span className='bracket'>{'}'}</span></button>
            <div className={'cert' + (firstLoad ? toggle? '-maximize' : '-minimize' : '')}>
                {firstLoad ? <button className='left' onClick={leftHandler}><i className="fas fa-chevron-left"></i></button> : null}
                <div className='cert-img'>
                    <img 
                        className='javascript' 
                        style={{right: `${right[0]}%`, opacity: `${opacity[0]}`, transform: `scale(${opacity[0]},${opacity[0]})`}}
                        src='https://i.ibb.co/NmPtB84/Javascript-Algorithms-and-Data-Structures-min.png' 
                        alt='Javascript Algorithms and Data Structures Certificate' />
                    <img 
                        className='responsive' 
                        style={{right: `${right[1]}%`, opacity: `${opacity[1]}`, transform: `scale(${opacity[1]},${opacity[1]})`}}
                        src='https://i.ibb.co/kXJJ084/Responsive-Web-Design-min.png' 
                        alt='Responsive Web Design Certificate' />
                    <img 
                        className='front-end' 
                        style={{right: `${right[2]}%`, opacity: `${opacity[2]}`, transform: `scale(${opacity[2]},${opacity[2]})`}}
                        src='https://i.ibb.co/HgTPqCr/Front-End-Libraries-min.png'
                        alt='Front End Libraries Certificate' />
                </div>
                {firstLoad ? <button className='right' onClick={rightHandler}><i className="fas fa-chevron-right"></i></button> : null}
            </div>
            <span className='dirCert'>{toggle? <i className="fas fa-caret-up"></i> : <i className="fas fa-caret-down"></i>}</span>
        </div>
    )
}

export default Certificates
