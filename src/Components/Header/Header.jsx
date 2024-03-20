import { Link, NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <span>My website</span>
            <nav>
            
                <Link to="/">Home</Link>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <Link to="/about">About</Link>
                <Link to="/Contact">Contact Us</Link>
                
            </nav>
        </div>
    );
};

export default Header;