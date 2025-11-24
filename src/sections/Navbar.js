import '../styles/Navbar.css';
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { useTheme } from '../context/themeProvider';

export default function Navbar({isDarkMode, setIsDarkMode}) {
    const navigate = useNavigate();
    let location = useLocation()
    const { toggleTheme, darkMode } = useTheme();

    function NavbarSelect({name, callback}) {
        const locationName = location.pathname.split('/').at(1)
        
        return <div className='navbar-selects' onClick={() => callback()} style={locationName === name.toLowerCase() ? {fontWeight: 'bold'} : {}} >
            {name}
        </div>
    }

    // Dark mode toggle
    function DarkModeToggle() {
    
        return (
        <button 
            className={`toggle-container ${darkMode && 'dark'}`} 
            onClick={toggleTheme}
        >
            <motion.div
                className={`toggle-handle ${darkMode && 'dark'}`}
                initial={false}
                animate={{ 
                    x: darkMode ? 22 : 0,
                    backgroundColor: darkMode ? "#B0C4DE" : "#f1d884",
                }}
                transition={{
                    type: "spring",
                    duration: 0.5,
                    bounce: 0.2,
                }}
            />
        </button>
        )
    }

    return <div className={`navbar-body ${darkMode && 'dark'}`}>
        <div className='navbar-home' onClick={() => navigate('/')}>
            Anthony Hoang
        </div>
        <div className='navbar-selections'>
            <NavbarSelect name={'Projects'} callback={() => navigate('/projects')} />
            <NavbarSelect name={'Timeline'} callback={() => navigate('/timeline')} />
            <DarkModeToggle />
        </div>
    </div>
}
