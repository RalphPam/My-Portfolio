import React, { useState } from 'react'
import './Projects.scss'

function Projects() {
    const [toggle, setToggle] = useState(false)
    const [firstLoad, setFirstLoad] = useState(false)
    return (
        <div className='projects-container'>
            <span id='projects'></span>
            <button 
                className={'projects-btn' + (firstLoad ? toggle? '-maximize' : '-minimize' : '') }
                onClick={() => {setToggle(!toggle); setFirstLoad(true)}}
            >{'{ Projects }'}</button>
            <div className='projects'>
                <div className='card' id={'js' + (firstLoad ? toggle? '-maximize' : '-minimize' : '')}>
                    <img src='https://i.ibb.co/xG5Yrtt/jsCalc.png' alt='javascript calculator' />
                    <div className='projects-desc'>
                        <h3>Javascript Calculator</h3>
                        <p>-calculator created with Javascipt and React without using the eval function.</p>
                        <ul>
                            <li>React</li>
                            <li>CSS3</li>
                            <li>Responsive</li>
                        </ul>
                        <label>
                            <a href='https://javascript-calculator-by-ralph-p.netlify.app/' target='blank'>
                                <i className="fas fa-globe-asia"></i>
                            </a>
                            <a href='https://github.com/RalphPam/Javascript-Calculator' target='blank'>
                                <i className="fab fa-github"></i>
                            </a>                                            
                        </label>
                    </div>
                </div>
                <div className='card' id={'rq' + (firstLoad ? toggle? '-maximize' : '-minimize' : '')}>
                    <img src='https://i.ibb.co/BzdzyHY/rq.png' alt='random quote generator' />
                    <div className='projects-desc'>
                        <h3>Random Quote Generator</h3>
                        <p>-a quote generator that fetch quotes from a fake online rest api.</p>
                        <ul>
                            <li>React</li>
                            <li>Redux</li>
                            <li>Axios</li>
                            <li>CSS3</li>
                            <li>Responsive</li>
                        </ul>
                        <label>
                            <a href='https://random-quote-generator-by-ralph-p.netlify.app/' target='blank'>
                                <i className="fas fa-globe-asia"></i>
                            </a>
                            <a href='https://github.com/RalphPam/Random-Quote-Generator' target='blank'>
                                <i className="fab fa-github"></i>
                            </a>
                        </label>
                    </div>   
                </div>
                <div className='card' id={'pc' + (firstLoad ? toggle? '-maximize' : '-minimize' : '')}>
                    <img src='https://i.ibb.co/5LvXnBc/pc.png' alt='pomodoro clock' />
                    <div className='projects-desc'>
                        <h3>Pomodoro Clock</h3>
                        <p>time management app created using React with cool animations.</p>
                        <ul>
                            <li>React</li>
                            <li>Hooks</li>
                            <li>CSS3</li>
                            <li>Responsive</li>
                        </ul>
                        <label>
                            <a href='https://pomodoro-clock-by-ralph-p.netlify.app/' target='blank'> 
                                <i className="fas fa-globe-asia"></i>
                            </a>
                            <a href='https://github.com/RalphPam/Pomodoro-Clock' target='blank'>
                                <i className="fab fa-github"></i>
                            </a>
                        </label>
                    </div>
                </div>
            </div>
            <span className='dirP'>{toggle? <i className="fas fa-caret-up"></i> : <i className="fas fa-caret-down"></i>}</span>
        </div>
    )
}

export default Projects
