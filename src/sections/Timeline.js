import '../styles/Timeline.css';
import React from 'react';
import Navbar from './Navbar';
import tempRoles from '../data/temp_roles';
import { useTheme } from '../context/themeProvider';


export default function Timeline() {
    const { darkMode } = useTheme();

    function TimelineSegment({date, title, desctiption}) {
        const [expanded, setExpanded] = React.useState(true)
        const descRef = React.useRef(null)

        React.useEffect(() => {
            if (expanded && descRef.current) {
                const height = descRef.current.scrollHeight;
                descRef.current.style.height = `${height}px`;
            } else if (descRef.current) {
                descRef.current.style.height = "0px";
            }
        }, [expanded]);

        return <div className='segment-body'>
            <div className='segment-left'>
                <div className={`segment-date ${darkMode && 'dark'}`}>
                    {date}
                </div>
            </div>
            <div className='segment-right'>
                <div className='segment-title' onClick={() => setExpanded(!expanded)}>
                    {title}
                </div>
                <div className='segment-description' ref={descRef} >
                    {desctiption}
                </div>
            </div>
        </div>
    }

    return <div className={`timeline-outer-body ${darkMode && 'dark'}`}>
        <div className='timeline-upper-body'>
            <div className='timeline-title'>
                My Journey
            </div>
            <div className='timeline-main-text'>
                From tutoring to full-stack web development, here's a look at my professional growth.
            </div>
        </div>
        <div className='timeline-graph-parent'>
            <div className='timeline-line-parent'>
                <div className='timeline-line'>
                
                </div>
            </div>
            {tempRoles.map((role) => {
                return <TimelineSegment date={role.date} title={role.title} desctiption={role.description}/>
            })}
        </div>
    </div>
}