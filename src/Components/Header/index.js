import React from 'react'
import './style.css'
import logo from './house.png';

const Header =  () => {
    return (
        <header>
            <img className='logo' src={logo} alt="logo" />
            <nav>
                <ul className='nav__links'>
                    <li><a href='/'>Services</a></li>
                    <li><a href='/'>Projects</a></li>
                    <li><a href='/'>About</a></li>
                </ul>
            </nav>
            <a className='cta' href="/"><button>Logout</button></a>
        </header>
    )
}

export default Header;