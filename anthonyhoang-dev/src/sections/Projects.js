import '../styles/Projects.css';
import React from 'react';
import Navbar from './Navbar';
import { useNavigate, useLocation } from 'react-router-dom';
import pathly from '../images/Pathly_Light.png';
import tempDb from '../data/temp_data';
import Icons from '../icons/Icons';

export default function Projects() {
    const [projectData, setProjectData] = React.useState(null)

    let location = useLocation()
    const projectName = location.pathname.split('/').at(-1)
    const formattedProjectName = projectName.split('-').join(' ')
    React.useEffect(() => {
        setProjectData(tempDb.find((x) => x.name.toLowerCase() === formattedProjectName))
    }, [])

    let navigate = useNavigate()

    function Tag({name}) {

        return <div className='tag-body'>
            <div className='tag-text'>
             {name}
            </div>
        </div>
    }


    return (projectData && <div className='projects-container'>
        <Navbar />
        <div className='projects-upper-body'>
            <div className='projects-title'>
                {projectData.name}
                <button className='back-button' onClick={() => navigate('/projects')}>
                    <Icons.BackArrow width={'100%'} height={'100%'}/>
                </button>
            </div>
            <div className='projects-short-description'>
                {projectData.shortDescription}
            </div>
        </div>
        <div className='projects-more-container'>
            <div className='projects-more-image-container'>
                <img className='projects-more-image' src={projectData.gif || projectData.image}/>
            </div>
            <div className='projects-more-other'>
                <div style={{width: '90%'}}>
                    <div className='projects-sub-title'>
                        Description
                    </div>
                    <div className='projects-long-description'>
                        {projectData.description}
                    </div>
                    <div className='projects-takeaways-container'>
                        {projectData.keyTakeaways.map((k) => {
                            return <div>
                                &#9679; {k}
                            </div>
                        })}
                    </div>
                </div>
                <div style={{width: '90%'}}>
                    <div className='projects-sub-title'>
                        Technologies
                    </div>
                    <div className='projects-tag-body'>
                        {projectData.tags.sort((a,b) => b.length - a.length).map((tag) => {
                            return <Tag name={tag} />
                        })}
                    </div>
                </div>
                <div style={{width: '90%'}}>
                    <div className='projects-sub-title' style={{textDecoration: 'underline', cursor: 'pointer', width: 'fit-content'}}>
                        <a href={projectData.url} style={{color: 'black'}}>Github Repo</a>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}