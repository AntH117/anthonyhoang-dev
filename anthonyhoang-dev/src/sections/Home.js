import '../styles/Home.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Home_Projects from './Home_Projects';
import Navbar from './Navbar';
import Home_Skills from './Home_Skills';
import Home_Contact from './Home_Contact';

export default function Home() {
    const navigate = useNavigate();

    function ProfilePicture() {

        return <div className='profile-pic-body'>

        </div>
    }

    function AboutMe() {

        return <div className='about-me-body'>
            <div className='about-me-title'>
                About
            </div>
            <div className='about-me-main'>
                After studying business and discovering my passion for problem-solving through
                code, I've been focused on buidling web apps with React that feel intuitive and 
                engaging.
            </div>
            <div className='about-me-sub'>
                When I'm not coding, I'm polishing up my Japanese and exploring my passion for Escape Rooms 🗝️
            </div>
        </div>
    }

    return <>
        <div className='home-body'>
            <div className='home-upper-body'>
                <div className='home-title-text'>
                    <span>Hi, I'm</span>
                    <span>Anthony Hoang</span>
                </div>
                <div className='home-main-text'>
                    a Full-Stack Developer passionate about creating clean, interactive web experiences
                </div>
                <div className='home-sub-text'>
                    I love turning ideas into functional, user-friendly apps using React and modern web tools.
                </div>
                <button className='home-projects-button' onClick={() => navigate('/projects')}>
                    View Projects
                </button>
                <ProfilePicture />
            </div>
            <AboutMe />
        </div>
        <Home_Projects />
        <Home_Skills />
        <Home_Contact />
    </>
}