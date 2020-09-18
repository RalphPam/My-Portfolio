import React from 'react'
import './Header.scss'

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
        <div className='cont-header' id='header'>
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
                    src='https://i.ibb.co/PDBfrTH/js.png' 
                    alt='javascript logo' 
                />
                <img 
                    className='fe'
                    style={anim2} 
                    src='https://i.ibb.co/dpJBdZd/css.png' 
                    alt='css logo' 
                />
                <img 
                    className='fe' 
                    style={anim3} 
                    src='https://i.ibb.co/PCYwDPR/html.png' 
                    alt='html logo' 
                />
                <img 
                    className='fe' 
                    style={anim4} 
                    src='https://i.ibb.co/kQknY71/jest.png'
                    alt='jest logo' />
                <img 
                    className='fe' 
                    style={anim5} 
                    src='https://i.ibb.co/3hN8Q6R/react.png' 
                    alt='react logo' 
                />
                <img 
                    className='fe' 
                    style={anim6} 
                    src='https://i.ibb.co/9rv0Xsc/redux.png' 
                    alt='redux logo'
                />
                <img 
                    className='fe' 
                    style={anim7} 
                    src='https://i.ibb.co/Wzbqkmk/webpack.png'
                    alt='webpack logo' 
                />
            </div>
        </div>
    )
}

export default Header
