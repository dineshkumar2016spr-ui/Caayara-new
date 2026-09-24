import React from 'react';
import { Link } from 'react-router-dom';
import './styles/colors.css';

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/repair">Repair</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;