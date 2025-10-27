import '../styles/Home.css';
import React from 'react';

export default function Home() {

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
                When I'm not coding, I'm polishing up my Japanese and exploring my passion for Escape Rooms
            </div>
        </div>
    }

    return <div className='home-body'>
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
        <button className='home-projects-button'>
            View Projects
        </button>
        <AboutMe />
        <ProfilePicture />
    </div>
}