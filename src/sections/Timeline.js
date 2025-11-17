import '../styles/Timeline.css';
import React from 'react';
import Navbar from './Navbar';

export default function Timeline() {

    return <div className='timeline-outer-body'>
        <div className='timeline-upper-body'>
            <div className='timeline-title'>
                My Journey
            </div>
            <div className='timeline-main-text'>
                From tutoring to full-stack web development, here's a look at my professional growth.
            </div>
        </div>
        <div className='timeline-graph'>

        </div>
    </div>
}