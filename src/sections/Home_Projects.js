import '../styles/Home_Projects.css';
import React from 'react';
import pathly from '../images/Pathly_Light.png';
import codeIn from '../images/CodeIn_Light.png';
import flightFinder from '../images/flight-finder.png';
import slider from '../images/Slider.png'
import wordle from '../images/Wordle.png'
import bookFinder from '../images/Book_finder.png'
import { useNavigate } from 'react-router-dom';
import Icons from '../icons/Icons';
import { useTheme } from '../context/themeProvider';

export default function Home_Projects() {
    const navigate = useNavigate();
    const { darkMode } = useTheme();

    function IndividualProject({name, img, callback, pinned}) {
        
        return <div className={`ind-project-body ${pinned && 'pinned'}`} onClick={() => callback()}>
            <div className='ind-project-img-container'>
                <div className='ind-project-img'>
                    <img src={img} className='ind-img'/>
                </div>
            </div>
            <div className={`ind-project-name ${darkMode && 'dark'}`}>
                <p>
                    {name}
                </p>
            </div>
            {pinned && <div className='pin-body'>
                <Icons.Pin color={'#60a5fa'} />
                </div>}
        </div>
    }

    return <div className='home-projects-body'>
        <div className='home-projects-title-container'>
            <a className='home-projects-title'>
                Projects
            </a>
            <button className={`home-projects-more ${darkMode && 'dark'}`} onClick={() => navigate('/projects')}>
                Explore all
            </button>
        </div>
        <div className='home-projects-layout'>
            <IndividualProject name={'CodeIn'} img={codeIn} callback={() => navigate('/projects/codein')} pinned={true}/>
            <IndividualProject name={'Pathly'} img={pathly} callback={() => navigate('/projects/pathly')}/>
            <IndividualProject name={'Flight Tracker'} img={flightFinder} callback={() => navigate('/projects/flight-tracker')}/>
            <IndividualProject name={'Wordle'} img={wordle} callback={() => navigate('/projects/wordle')}/>
            <IndividualProject name={'Book Finder'} img={bookFinder} callback={() => navigate('/projects/book-finder')}/>
            <IndividualProject name={'Slider'} img={slider} callback={() => navigate('/projects/slider')}/>
        </div>
    </div>
}