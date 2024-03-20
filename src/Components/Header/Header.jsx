import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <span>My website</span>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/users">Users</Link>
                <Link to="/about">About</Link>
                <Link to="/Contact">Contact Us</Link>
                
            </nav>
        </div>
    );
};

export default Header;