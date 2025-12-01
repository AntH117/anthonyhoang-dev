import '../styles/Timeline.css';
import React from 'react';
import Navbar from './Navbar';
import tempRoles from '../data/temp_roles';
import { useTheme } from '../context/themeProvider';
import { del } from 'motion/react-client';
import { motion } from 'motion/react';

function useBreakpoint(breakpoint = 900) {
    const [isLarge, setIsLarge] = React.useState(() => window.innerWidth > breakpoint);

    React.useEffect(() => {
        const check = () => setIsLarge(window.innerWidth > breakpoint);
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, [breakpoint]);

    return isLarge; 
}

export default function Timeline() {
    const timings = 700;
    const isLargeScreen = useBreakpoint(900);
    const [desktop, setDestop] = React.useState(isLargeScreen)
    React.useEffect(() => {
        setDestop(isLargeScreen)
    }, [isLargeScreen])
    
    function TimelineSegment({date, title, desctiption, icon, delay, pos}) {
        const hasAppered = React.useRef(false);
        const hasExpanded = React.useRef(false)
        const { darkMode } = useTheme();
        const [desktop, setDestop] = React.useState(isLargeScreen)
        React.useEffect(() => {
            setDestop(isLargeScreen)
        }, [isLargeScreen])
        
        function Segment() {
            const [expanded, setExpanded] = React.useState(hasExpanded.current)
            const descRef = React.useRef(null)
            const [appear, setAppear] = React.useState(false)
            
            React.useEffect(() => {
                if (expanded && descRef.current) {
                    const height = descRef.current.scrollHeight;
                    descRef.current.style.height = `${height}px`;
                    hasExpanded.current = true;
                } else if (descRef.current) {
                    descRef.current.style.height = "0px";
                    hasExpanded.current = false;
                }
            }, [expanded]);

            // Auto Expand
            React.useEffect(() => {
                if (!hasExpanded.current) {
                setTimeout(() => {
                    setExpanded(true)
                }, timings * 4 + delay)
                }
            }, [])

            // Set appear for first time
            React.useEffect(() => {
                if (!hasAppered.current) {
                 setTimeout(() => {
                    setAppear(true)
                }, delay)
                }
            }, [])


            return (appear || hasAppered.current) &&
                <div className={`segment-body`}>
                    <div className='segment-left'>
                        <motion.div 
                            initial={hasAppered.current ? false : { opacity: 0, transform: 'translateY(10px)'}} 
                            animate={{ opacity: 1, transform: 'translateY(0px)', transition: {duration: 0.5} }} 
                            className={`segment-date ${darkMode && 'dark'}`}
                            onAnimationComplete={() => hasAppered.current = true}    
                        >
                            {date}
                        </motion.div>
                    </div>
                    <motion.div 
                        initial={hasAppered.current ? false : { opacity: 0, transform: 'translateX(50px)'}} 
                        animate={{ opacity: 1, transform: 'translateX(0px)', 
                        transition: {duration: 0.5, delay: 0.5} }} 
                        className={`segment-right ${expanded && 'expanded'}`}
                        >
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
                    </motion.div>
                </div>  
        }

        function DesktopSegment() {
            const [appear, setAppear] = React.useState(false)

            React.useEffect(() => {
                if (!hasAppered.current) {
                 setTimeout(() => {
                    setAppear(true)
                }, delay)
                }
            }, [])


            function DesktopCard() {
                const [expanded, setExpanded] = React.useState(hasExpanded.current)
                const descRef = React.useRef(null)
                const position = pos % 2 ? 'left' : 'right'
                    
                React.useEffect(() => {
                    if (expanded && descRef.current) {
                        const height = descRef.current.scrollHeight;
                        descRef.current.style.height = `${height}px`;
                        hasExpanded.current = true;
                    } else if (descRef.current) {
                        descRef.current.style.height = "0px";
                        hasExpanded.current = false;
                    }
                }, [expanded]);

                // Auto Expand
                React.useEffect(() => {
                    setTimeout(() => {
                        setExpanded(true)
                    }, timings * 4 + 500)
                }, [])
                
                const variants = {
                    left: {
                        opacity: 0,
                        transform: 'translateX(-50px)'
                    },
                    right: {
                        opacity: 0,
                        transform: 'translateX(50px)'
                    }
                }
                
                
                return (
                 <motion.div initial={hasAppered.current ? false : (position === 'left' ? variants.left : variants.right)} animate={{ opacity: 1, transform: 'translateX(0px)', transition: {duration: 0.5, delay: 0.5} }} style={{width: '35%'}} className={`segment-right ${expanded && 'expanded'}`}>
                    <div className={`segment-title`} onClick={() => setExpanded(!expanded)} style={position === 'left' ? {justifyContent: 'end'} : {}}>
                        {position === 'right' && <div className='anchor-body'>
                            <div className='anchor-circle' style={expanded ? {} : {backgroundColor: '#A9B0B8'}}></div>
                            <div className='anchor-line'  style={expanded ? {} : {backgroundColor: '#A9B0B8'}}></div>
                        </div>}
                        <div className='segment-title-text'>
                            {title}
                        </div>
                        {position === 'left' && <div className='anchor-body'>
                            <div className='anchor-line-left'  style={expanded ? {} : {backgroundColor: '#A9B0B8'}}></div>
                            <div className='anchor-circle-left' style={expanded ? {} : {backgroundColor: '#A9B0B8'}}></div>
                        </div>}
                    </div>
                    <div className='segment-description' 
                        ref={descRef} 
                        style={{
                            ...(expanded && { paddingBottom: '0.5rem' }),
                            ...(position === 'left'  && { textAlign: 'end' }),
                            ...(position === 'right'  && { textAlign: 'start' }),
                        }}>
                        {desctiption}
                    </div>
                </motion.div>
                )
            }

            function DesktopDate() {
                return (
                <div className='segment-left'>
                        <motion.div 
                            initial={hasAppered.current ? false : { opacity: 0, transform: 'translateY(10px)'}} 
                            animate={{ opacity: 1, transform: 'translateY(0px)', transition: {duration: 0.5} }} 
                            className={`segment-date ${darkMode && 'dark'}`}
                            onAnimationComplete={() => hasAppered.current = true}    
                        >
                            {date}
                        </motion.div>
                </div>
                )
            }

            function Blank() {
                return (
                    <div className='blank-body'>

                    </div>
                )
            }
            return (appear || hasAppered.current) &&
                <div className='segment-body' style={{justifyContent: 'center'}}>
                    {pos % 2 ? <DesktopCard /> : <Blank />}
                    <DesktopDate />
                    {pos % 2 ? <Blank /> : <DesktopCard />}
                </div>
            
        }

        return desktop ? <DesktopSegment/> : <Segment />
    }

    return <div className={`timeline-outer-body`}>
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
                return <TimelineSegment date={role.date} title={role.title} desctiption={role.description} icon={role.icon} delay={timings * (i + 1)} pos={i + 1}/>
            })}
        </div>
    </div>
}