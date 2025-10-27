import '../styles/Navbar.css';
import React from 'react';

export default function Navbar() {

    function NavbarSelect({name}) {

        return <div className='navbar-selects'>
            {name}
        </div>
    }

    return <div className='navbar-body'>
        <div className='navbar-home'>
            Anthony Hoang
        </div>
        <div className='navbar-selections'>
            <NavbarSelect name={'Projects'}/>
            <NavbarSelect name={'Skills'}/>
            <NavbarSelect name={'Contact'}/>
        </div>
    </div>
}
