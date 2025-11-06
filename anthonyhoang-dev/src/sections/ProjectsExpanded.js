import '../styles/ProjectsExpanded.css';
import Navbar from './Navbar';
import React from 'react';
import tempDb from '../data/temp_data';
import { useNavigate } from 'react-router-dom';

export default function ProjectsExpanded() {
    const projects = tempDb;
    const navigate = useNavigate();

    function EProject({name, description, tags, image}) {
        const url = name.toLowerCase().split(' ').join('-')

        function Tag({name}) {

            return <div className='tag-body'>
                <div className='tag-text'>
                 {name}
                </div>
            </div>
        }

        return <div className='eProject-body' onClick={() => navigate(`${url}`)}>
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
                    projects.map((p) => {
                        return <EProject name={p.name} description={p.shortDescription} tags={p.tags} image={p.image}/>
                    })
                }
            </div>
        </div>
    </div>
}