import '../styles/Timeline.css';
import React from 'react';
import Navbar from './Navbar';
import tempRoles from '../data/temp_roles';
import { useTheme } from '../context/themeProvider';
import { del } from 'motion/react-client';


export default function Timeline() {
    const { darkMode } = useTheme();
    const timings = [1000, 2000, 3000, 4000]
    const width = useBodyWidth()
    const [desktop, setDestop] = React.useState(width >= 900)
    React.useEffect(() => {
        if (width >= 900 && desktop !== true) {
            setDestop(true)
        } else if (width < 900 && desktop !== false) {
            setDestop(false)
        }
    }, [width])
    function useBodyWidth() {
        const [width, setWidth] = React.useState(document.body.clientWidth);
      
        React.useEffect(() => {
          const updateWidth = () => setWidth(document.body.clientWidth);
      
          window.addEventListener("resize", updateWidth);
          return () => window.removeEventListener("resize", updateWidth);
        }, []);
      
        return width;
    }

    function TimelineSegment({date, title, desctiption, icon, delay, pos}) {
        const [expanded, setExpanded] = React.useState(false)
        const [appear, setAppear] = React.useState(false)
        const descRef = React.useRef(null)

        React.useEffect(() => {
            if (expanded && descRef.current) {
                const height = descRef.current.scrollHeight;
                descRef.current.style.height = `${height}px`;
            } else if (descRef.current) {
                descRef.current.style.height = "0px";
            }
        }, [expanded]);

        React.useEffect(() => {
            setTimeout(() => {
                setExpanded(true)
            }, timings.at(-1) + delay)
        }, [])
                React.useEffect(() => {
            setTimeout(() => {
                setAppear(true)
            }, delay)
        }, [])


        function Segment() {
            return (
                <div className={`segment-body`}>
                <div className='segment-left'>
                    <div className={`segment-date ${darkMode && 'dark'} ${appear && 'appear'}`}>
                        {date}
                    </div>
                </div>
                <div className={`segment-right ${expanded && 'expanded'}  ${appear && 'appear'}`}>
                    <div className={`segment-title`} onClick={() => setExpanded(!expanded)}>
                        <div className='anchor-body'>
                            <div className='anchor-circle' style={expanded ? {} : {backgroundColor: '#A9B0B8'}}></div>
                            <div className='anchor-line'  style={expanded ? {} : {backgroundColor: '#A9B0B8'}}></div>
                        </div>
                        <div className='segment-title-text'>
                            {title}
                        </div>
                    </div>
                    <div className='segment-description' ref={descRef} style={expanded ? {paddingBottom: '0.5rem'} : {}}>
                        {desctiption}
                    </div>
                </div>
            </div>
            )
        }

        function DesktopSegment() {

            function DesktopCard() {
                
                return (
                    <div className={`segment-right ${expanded && 'expanded'}  ${appear && 'appear'}`} style={{width: '35%'}}>
                    <div className={`segment-title`} onClick={() => setExpanded(!expanded)}>
                        <div className='anchor-body'>
                            <div className='anchor-circle' style={expanded ? {} : {backgroundColor: '#A9B0B8'}}></div>
                            <div className='anchor-line'  style={expanded ? {} : {backgroundColor: '#A9B0B8'}}></div>
                        </div>
                        <div className='segment-title-text'>
                            {title}
                        </div>
                    </div>
                    <div className='segment-description' ref={descRef} style={expanded ? {paddingBottom: '0.5rem'} : {}}>
                        {desctiption}
                    </div>
                </div>
                )
            }

            function DesktopDate() {
                return (
                <div className='segment-left'>
                    <div className={`segment-date ${darkMode && 'dark'} ${appear && 'appear'}`}>
                        {date}
                    </div>
                </div>
                )
            }

            function Blank() {
                return (
                    <div className='blank-body'>

                    </div>
                )
            }
            
            return (
                <div className='segment-body' style={{justifyContent: 'space-between'}}>
                    {pos % 2 ? <DesktopCard /> : <Blank />}
                    <DesktopDate />
                    {pos % 2 ? <Blank /> : <DesktopCard />}
                </div>
            )
        }

        return desktop ? <DesktopSegment/> : <Segment />
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
            <div className={`timeline-line-parent ${desktop && 'desktop'}`}>
                <div className='timeline-line'>
                
                </div>
            </div>
            {tempRoles.map((role, i) => {
                return <TimelineSegment date={role.date} title={role.title} desctiption={role.description} icon={role.icon} delay={timings[i]} pos={i + 1}/>
            })}
        </div>
    </div>
}