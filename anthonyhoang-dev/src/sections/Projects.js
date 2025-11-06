import '../styles/Projects.css';
import React from 'react';
import Navbar from './Navbar';
import { useNavigate, useLocation } from 'react-router-dom';
import pathly from '../images/Pathly_Light.png';
import tempDb from '../data/temp_data';

export default function Projects() {
    const [projectData, setProjectData] = React.useState(null)

    let location = useLocation()
    const projectName = location.pathname.split('/').at(-1)
    const formattedProjectName = projectName.split('-').join(' ')
    
    React.useEffect(() => {
        setProjectData(tempDb.find((x) => x.name.toLowerCase() === formattedProjectName))
    }, [])
    console.log(projectData)

    function Tag({name}) {

        return <div className='tag-body'>
            <div className='tag-text'>
             {name}
            </div>
        </div>
    }


    return (projectData && <div className='projects-container'>
        <Navbar />
        <div>
            <div className='projects-title'>
                {projectData.name}
            </div>
            <div className='projects-short-description'>
                {projectData.shortDescription}
            </div>
        </div>
        <div className='projects-more-container'>
            <div className='projects-more-image-container'>
                <img className='projects-more-image' src={projectData.image}/>
            </div>
            <div style={{width: '90%'}}>
                <div className='projects-sub-title'>
                    Description
                </div>
                <div className='projects-long-description'>
                    {projectData.description}
                </div>
            </div>
            <div style={{width: '90%'}}>
                <div className='projects-sub-title'>
                    Technologies
                </div>
                <div className='projects-tag-body'>
                    {projectData.tags.map((tag) => {
                        return <Tag name={tag} />
                    })}
                </div>
            </div>
        </div>
    </div>)
}