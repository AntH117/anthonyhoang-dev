import '../styles/Skills.css';
import React from 'react';
import react_logo from '../images/React-icon.png';
import javascript_logo from '../images/Js-logo.png';
import node_logo from '../images/Node-logo.png';
import git_logo from '../images/Git-Icon.png';
import firebase_logo from'../images/firebase-logo.png';
import tailwind_logo from'../images/Tailwind_CSS_Logo.png';

export default function Skills() {

    const skills = [
        {title: 'React', logo: react_logo},
        {title: 'JavaScript', logo: javascript_logo},
        {title: 'Node.js', logo: node_logo},
        {title: 'Git', logo: git_logo},
        {title: 'Firebase', logo: firebase_logo},
        {title: 'Tailwind', logo: tailwind_logo}
    ]

    function IndividualSkill({title, icon}) {

        return <div className='ind-skill-body'>
            <div className='ind-skill-icon'>
                <img src={icon} className='ind-icon'/>
            </div>
            <div className='ind-skill-title'>
                {title}
            </div>
        </div>
    }

    return <div className='skills-body'>
        <div className='skills-title'>
            Skills
        </div>
        <div className='skills-main'>
            Technologies I work with
        </div>
        <div className='skills-grid-container'>
            {skills.map((skill) => {
                return <IndividualSkill title={skill.title} icon={skill.logo}/>
            })}
        </div>
    </div>
}