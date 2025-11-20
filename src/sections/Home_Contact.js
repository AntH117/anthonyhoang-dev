import '../styles/Home_Contact.css';
import React from 'react';
import Icons from '../icons/Icons';

export default function Home_Contact() {

    const linkendin_link = 'https://www.linkedin.com/in/anthony-hoang-2b8578199/'
    const github_link = 'https://github.com/AntH117'

    function ContactField({icon, name, callback}) {

        return <div className='contact-field-body' onClick={() => callback()} >
            <div className='contact-field-icon'>
                {icon}
            </div>  
            <div className='contact-field-name'>
                {name}
            </div>
        </div>
    }


    return (
        <div className='contact-body'>
            <div className='contact-title'>
                Contact
            </div>
            <div className='contact-main-text'>
                I'm always open to chatting about web development, collaborations and/or opportunities 
                <span>
                    Feel free to reach out!
                </span>
            </div>
            <div className='contacts-body'>
                <ContactField icon={<Icons.Email />} name={'anthony.hoang201@gmail.com'} callback={() => null}/>
                <ContactField icon={<Icons.Linkendin />} name={'Anthony Hoang'} callback={() => window.open(linkendin_link, "_blank")}/>
                <ContactField icon={<Icons.GitHub />} name={'AntH117'} callback={() => window.open(github_link, "_blank")}/>
            </div>
        </div>
    )
}