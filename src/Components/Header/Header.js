import React from 'react'
import './Header.scss'
import jsImg from './../../Photos/js.png'
import cssImg from './../../Photos/css.png'
import htmlImg from './../../Photos/html.png'
import jestImg from './../../Photos/jest.png'
import reactImg from './../../Photos/react.png'
import reduxImg from './../../Photos/redux.png'
import webpackImg from './../../Photos/webpack.png'

function Header() {
    const anim1 =   {
        left: `10%`, 
        animation: `bubbles ${(Math.random() * 6) + 3}s ease-in infinite`
    }
    const anim2 =   {
        left: `20%`, 
        animation: `bubbles ${(Math.random() * 6) + 3}s ease-in infinite`
    }
    const anim3 =   {
        left: `35%`, 
        animation: `bubbles ${(Math.random() * 6) + 3}s ease-in infinite`
    }
    const anim4 =   {
        left: `40%`, 
        animation: `bubbles ${(Math.random() * 6) + 3}s ease-in infinite`
    }
    const anim5 =   {
        left: `60%`, 
        animation: `bubbles ${(Math.random() * 6) + 3}s ease-in infinite`
    }
    const anim6 =   {
        left: `75%`, 
        animation: `bubbles ${(Math.random() * 6) + 3}s ease-in infinite`
    }
    const anim7 =   {
        left: `90%`, 
        animation: `bubbles ${(Math.random() * 6) + 3}s ease-in infinite`
    }
    return ( 
        <div className='cont-header'>
            <div className='header-wrapper'> 
                <h1 className='name'>
                    <span className='five'>{'{'}</span>
                    <span className='ten'>{'{'}</span>
                    <span className='fullName'>RALPH PAMINTUAN</span>
                    <span className='ten'>{'}'}</span>
                    <span className='five'>{'}'}</span>
                </h1>
                <p>Self taught Front End Web Developer and a graduate of Electronics Engineering</p>
                <img 
                    className='fe'
                    style={anim1} 
                    src={jsImg} 
                    alt='javascript logo' 
                />
                <img 
                    className='fe'
                    style={anim2} 
                    src={cssImg} 
                    alt='css logo' 
                />
                <img 
                    className='fe' 
                    style={anim3} 
                    src={htmlImg} 
                    alt='html logo' 
                />
                <img 
                    className='fe' 
                    style={anim4} 
                    src={jestImg} 
                    alt='jest logo' />
                <img 
                    className='fe' 
                    style={anim5} 
                    src={reactImg} 
                    alt='react logo' 
                />
                <img 
                    className='fe' 
                    style={anim6} 
                    src={reduxImg} 
                    alt='redux logo'
                />
                <img 
                    className='fe' 
                    style={anim7} 
                    src={webpackImg} 
                    alt='webpack logo' 
                />
            </div>
        </div>
    )
}

export default Header
