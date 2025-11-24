import '../styles/ProjectsExpanded.css';
import Navbar from './Navbar';
import React from 'react';
import tempDb from '../data/temp_data';
import { useNavigate } from 'react-router-dom';
import Icons from '../icons/Icons';
import { useTheme } from '../context/themeProvider';

export default function ProjectsExpanded() {
    const projects = tempDb;
    const navigate = useNavigate();
    const { darkMode } = useTheme();

    function EProject({name, description, tags, image, pinned}) {
        const url = name.toLowerCase().split(' ').join('-')
        const sortedTags = tags.sort((a,b) => b.length - a.length)
        function Tag({name}) {

            return <div className={`tag-body ${darkMode && 'dark'}`}>
                <div className='tag-text'>
                 {name}
                </div>
            </div>
        }

        return <div className={`eProject-body ${pinned && 'pinned'} ${darkMode && 'dark'}`} onClick={() => navigate(`${url}`)}>
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
                    {sortedTags.map((tag) => {
                        return <Tag name={tag} />
                    })}
                </div>
            </div>
            {pinned && <div className='eProject-pin-body'>
                <Icons.Pin  color={'#60a5fa'} width={'1.2rem'} height={'1.2rem'}/>
                </div>}
        </div>
    }

    return <div className={`projects-expanded-container ${darkMode && 'dark'}`}>
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
                        return <EProject name={p.name} description={p.shortDescription} tags={p.tags} image={p.image} pinned={p.name === 'CodeIn'}/>
                    })
                }
            </div>
        </div>
    </div>
}