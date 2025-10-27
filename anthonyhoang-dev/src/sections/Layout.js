import Home from './Home';
import Navbar from './Navbar';
import '../styles/Layout.css';

export default function Layout() {

    return (
        <div className='layout-container'>
            <Navbar />
            <Home />
        </div>
    )
}