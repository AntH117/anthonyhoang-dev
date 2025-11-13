import Home from './Home';
import Home_Projects from './Home_Projects';
import Navbar from './Navbar';
import Home_Skills from './Home_Skills';
import Home_Contact from './Home_Contact';
import '../styles/Layout.css';
import { Outlet } from 'react-router-dom';

export default function Layout() {

    return (
        <div className='layout-container'>
            <Navbar />
            <Outlet />
        </div>
    )
}