import '../styles/Projects.css';
import React from 'react';

export default function Projects() {

    function IndividualProject({name, img}) {
        
        return <div className='ind-project-body'>
            <div className='ind-project-img'>

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
            <IndividualProject name={'Pathly'}/>
            <IndividualProject name={'CodeIn'}/>
            <IndividualProject name={'Flight Tracker'}/>
        </div>
    </div>
}