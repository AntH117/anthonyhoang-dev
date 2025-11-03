import '../styles/Navbar.css';
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate();
    let location = useLocation()

    function NavbarSelect({name, callback}) {
        const locationName = location.pathname.split('/').at(1)
        
        return <div className='navbar-selects' onClick={() => callback()} style={locationName === name.toLowerCase() ? {fontWeight: 'bold'} : {}} >
            {name}
        </div>
    }

    return <div className='navbar-body'>
        <div className='navbar-home' onClick={() => navigate('/')}>
            Anthony Hoang
        </div>
        <div className='navbar-selections'>
            <NavbarSelect name={'Projects'} callback={() => navigate('/projects')} />
            <NavbarSelect name={'Skills'}/>
            <NavbarSelect name={'Contact'}/>
        </div>
    </div>
}
