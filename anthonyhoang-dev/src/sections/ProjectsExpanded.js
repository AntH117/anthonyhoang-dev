import '../styles/ProjectsExpanded.css';
import Navbar from './Navbar';
import React from 'react';
import pathly from '../images/Pathly_Light.png';
import codeIn from '../images/CodeIn_Light.png';
import flightFinder from '../images/flight-finder.png';
import slider from '../images/Slider.png'
import wordle from '../images/Wordle.png'
import bookFinder from '../images/Book_finder.png'

export default function ProjectsExpanded() {

    const Projects = [
        {
            name: 'CodeIn',
            description: 'A developer-styled LinkedIn platform for coders featuring authentication, user profiles, and post sharing',
            tags: ['React', 'Node.js', 'Firebase'],
            image: codeIn
        },
        {
            name: 'Pathly',
            description: 'A trip planner that helps users map out travel routes and attractions using the Google Maps API with custom markers and dynamic directions.',
            tags: ['React', 'Google Maps API', 'Tailwind CSS'],
            image: pathly
        },
        {
            name: 'Book Finder',
            description: 'A responsive book discovery app using the Google Books API, allowing users to search, view details, and explore related titles with optimized caching.',
            tags: ['React', 'API', 'JavaScript'],
            image: bookFinder
        },
        {
            name: 'Wordle',
            description: 'A Wordle clone built with React featuring dynamic letter validation, daily word challenges, and clean state management using React Hooks.',
            tags: ['React', 'Hooks', 'CSS'],
            image: wordle
        },
        {
            name: 'Flight Finder',
            description: 'A flight tracking app displaying live Australian flight data, delay indicators, and detailed route info using real-time API integration.',
            tags: ['React', 'API', 'Data Visualization'],
            image: flightFinder
        },
        {
            name: 'Slider',
            description: 'A visually engaging website showcasing a smooth sliding animation feature built with React transitions and CSS effects.',
            tags: ['React', 'CSS', 'Animations'],
            image: slider
        }
    ]
    

    function EProject({name, description, tags, image}) {

        function Tag({name}) {

            return <div className='tag-body'>
                <div className='tag-text'>
                 {name}
                </div>
            </div>
        }

        return <div className='eProject-body'>
            <div className='eProject-image-container'>
                <img className='eProject-image' src={image} />
            </div>
            <div className='eProject-info'>
                <div className='eProject-title'>
                    {name}
                </div>
                <div className='eProject-description'>
                    {description}
                </div>
                <div className='eProject-tags'>
                    {tags.map((tag) => {
                        return <Tag name={tag} />
                    })}
                </div>
            </div>
        </div>
    }

    return <div className='projects-expanded-container'>
        <Navbar />
        <div className='projects-expanded-body'>
            <div className='projects-expanded-title'>
                Projects
            </div>
            <div className='projects-expanded-main'>
                Explore a selection of my works
            </div>
            <div className='projects-expanded-layout'>
                {
                    Projects.map((p) => {
                        return <EProject name={p.name} description={p.description} tags={p.tags} image={p.image}/>
                    })
                }
            </div>
        </div>
    </div>
}