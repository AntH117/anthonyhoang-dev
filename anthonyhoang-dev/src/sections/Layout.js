import Home from './Home';
import Home_Projects from './Home_Projects';
import Navbar from './Navbar';
import Home_Skills from './Home_Skills';
import Home_Contact from './Home_Contact';
import '../styles/Layout.css';

export default function Layout() {

    return (
        <div className='layout-container'>
            <Navbar />
            <Home />
            <Home_Projects />
            <Home_Skills />
            <Home_Contact />
        </div>
    )
}