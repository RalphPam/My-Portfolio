import React, { useState } from 'react'
import './Toolkit.scss'

function Toolkit() {
    const [toggle, setToggle] = useState(false)
    const [firstLoad, setFirstLoad] = useState(false)
    return (
        <div className='toolkit-container' id='skills'>
            <button 
                className={'toolkit-btn' + (firstLoad ? toggle? '-maximize' : '-minimize' : '')}
                onClick={() => {setToggle(!toggle); setFirstLoad(true)}}
            >{'{ Toolkit }'}</button>
            <div className={'toolkit' + (firstLoad ? toggle? '-maximize' : '-minimize' : '')}>
                <ul>
                    <li><b>Languages:</b> Javascript, HTML5, CSS3/SASS</li>
                    <li><b>Framework:</b> React</li>
                    <li><b>Testing Framework:</b> Jest</li>
                    <li><b>React tools:</b> Redux, Enzyme, Flux</li>
                </ul>
            </div>
            <span className='dirT'>{toggle? <i className="fas fa-caret-up"></i> : <i className="fas fa-caret-down"></i>}</span>
        </div>
    )
}

export default Toolkit
