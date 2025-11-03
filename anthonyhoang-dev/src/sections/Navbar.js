import '../styles/Navbar.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate();

    function NavbarSelect({name, callback}) {

        return <div className='navbar-selects' onClick={() => callback()}>
            {name}
        </div>
    }

    return <div className='navbar-body'>
        <div className='navbar-home'>
            Anthony Hoang
        </div>
        <div className='navbar-selections'>
            <NavbarSelect name={'Projects'} callback={() => navigate('/projects')}/>
            <NavbarSelect name={'Skills'}/>
            <NavbarSelect name={'Contact'}/>
        </div>
    </div>
}
