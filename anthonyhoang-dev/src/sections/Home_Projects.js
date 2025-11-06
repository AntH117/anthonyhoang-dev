import '../styles/Home_Projects.css';
import React from 'react';
import pathly from '../images/Pathly_Light.png';
import codeIn from '../images/CodeIn_Light.png';
import flightFinder from '../images/flight-finder.png';
import slider from '../images/Slider.png'
import wordle from '../images/Wordle.png'
import bookFinder from '../images/Book_finder.png'
import { useNavigate } from 'react-router-dom';

export default function Home_Projects() {
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

    return <div className='home-projects-body'>
        <div className='home-projects-title'>
            Projects
        </div>
        <div className='home-projects-layout'>
            <IndividualProject name={'Pathly'} img={pathly} callback={() => navigate('/projects/pathly')}/>
            <IndividualProject name={'CodeIn'} img={codeIn} callback={() => navigate('/projects/codein')}/>
            <IndividualProject name={'Flight Tracker'} img={flightFinder} callback={() => navigate('/projects/flight-tracker')}/>
            <IndividualProject name={'Wordle'} img={wordle} callback={() => navigate('/projects/wordle')}/>
            <IndividualProject name={'Book Finder'} img={bookFinder} callback={() => navigate('/projects/book-finder')}/>
            <IndividualProject name={'Slider'} img={slider} callback={() => navigate('/projects/slider')}/>
        </div>
    </div>
}