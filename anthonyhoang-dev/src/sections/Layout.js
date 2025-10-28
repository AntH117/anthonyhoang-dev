import Home from './Home';
import Projects from './Projects';
import Navbar from './Navbar';
import Skills from './Skills';
import '../styles/Layout.css';

export default function Layout() {

    return (
        <div className='layout-container'>
            <Navbar />
            <Home />
            <Projects />
            <Skills />
        </div>
    )
}