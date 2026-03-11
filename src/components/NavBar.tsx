import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const closeMenu = () => setMenuOpen(false);

    return (
        <nav className='navbar'>
            <Link to='/' className='navbar-brand' onClick={closeMenu}>
                <svg className='logo' viewBox='0 0 100 100'>
                    <polygon points='50.0,5 88.97,27.5 88.97,72.5 50.0,95.0 11.03,72.5 11.03,27.5 ' />
                    <polygon points='50.0,25.25 71.43,37.63 71.43,62.38 50.0,74.75 28.57,62.38 28.57,37.62 ' />
                    <line x1='88.97' y1='27.5' x2='71.43' y2='37.63' />
                    <line x1='50.0' y1='95.0' x2='50.0' y2='74.75' />
                    <line x1='11.03' y1='27.5' x2='28.57' y2='37.62' />
                    <line x1='50.0' y1='25.25' x2='67.54' y2='15.12' />
                    <line x1='71.43' y1='62.38' x2='71.43' y2='82.63' />
                    <line x1='28.57' y1='62.38' x2='11.03' y2='52.25' />
                </svg>
                <span className='navbar-title'>David Castner</span>
            </Link>

            <button
                className='navbar-hamburger'
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label='Toggle menu'
                aria-expanded={menuOpen}
            >
                <span className='material-icons'>{menuOpen ? 'close' : 'menu'}</span>
            </button>

            <ul className={`navbar-links${menuOpen ? ' open' : ''}`}>
                <li><Link to='/about' onClick={closeMenu}>About</Link></li>
                <li><Link to='/coding' onClick={closeMenu}>Coding</Link></li>
                <li><Link to='/art' onClick={closeMenu}>Art</Link></li>
                <li><Link to='/acquisition' onClick={closeMenu}>Acquisition</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;
