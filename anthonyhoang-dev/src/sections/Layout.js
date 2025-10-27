import Home from './Home';
import Projects from './Projects';
import Navbar from './Navbar';
import '../styles/Layout.css';

export default function Layout() {

    return (
        <div className='layout-container'>
            <Navbar />
            <Home />
            <Projects />
        </div>
    )
}