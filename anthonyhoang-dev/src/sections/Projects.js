import '../styles/Projects.css';
import React from 'react';
import Navbar from './Navbar';
import { useNavigate, useLocation } from 'react-router-dom';
import pathly from '../images/Pathly_Light.png';

export default function Projects() {

    return <div className='projects-container'>
        <Navbar />
        <div>
            <div className='projects-title'>
                Pathly
            </div>
            <div className='projects-short-description'>
                A personal trip planner utlising google maps API
            </div>
        </div>
        <div className='projects-more-container'>
            <div className='projects-more-image-container'>
                <img className='projects-more-image' src={pathly}/>
            </div>
            <div style={{width: '90%'}}>
                <div className='projects-sub-title'>
                    Description
                </div>
                <div className='projects-long-description'>
                    Pathly is a personal trip planner that allows you to fully plan a trip with features such as adding extra locations, when to leave, full instructions
                </div>
            </div>
            <div style={{width: '90%'}}>
                <div className='projects-sub-title'>
                    Technologies
                </div>
            </div>
        </div>
    </div>
}