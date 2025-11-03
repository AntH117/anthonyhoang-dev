import '../styles/Projects.css';
import React from 'react';
import codeIn from '../images/CodeIn.png';
import flightFinder from '../images/flight-finder.png';
import pathly from '../images/Pathly.png';
import { useNavigate } from 'react-router-dom';

export default function Projects() {
    const navigate = useNavigate();

    function IndividualProject({name, img, callback}) {
        
        return <div className='ind-project-body' onClick={() => callback()}>
            <div className='ind-project-img-container'>
                <div className='ind-project-img'>
                    <img src={img} className='ind-img'/>
                </div>
            </div>
            <div className='ind-project-name'>
                <p>
                    {name}
                </p>
            </div>
        </div>
    }

    return <div className='projects-body'>
        <div className='projects-title'>
            Projects
        </div>
        <div className='projects-layout'>
            <IndividualProject name={'Pathly'} img={pathly} callback={() => navigate('/projects/pathly')}/>
            <IndividualProject name={'CodeIn'} img={codeIn} callback={() => navigate('/projects/codeIn')}/>
            <IndividualProject name={'Flight Tracker'} img={flightFinder} callback={() => navigate('/projects/flight-tracker')}/>
        </div>
    </div>
}