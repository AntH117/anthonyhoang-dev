import '../styles/Contact.css';
import React from 'react';
import Icons from '../icons/Icons';

export default function Contact() {

    function ContactField({icon, name, callback}) {

        return <div className='contact-field-body'>
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
                <ContactField icon={<Icons.Email />} name={'anthony.hoang201@gmail.com'}/>
                <ContactField icon={<Icons.Linkendin />} name={'Anthony Hoang'}/>
            </div>
        </div>
    )
}