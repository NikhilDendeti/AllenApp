import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import '../stylying/navbar.css';

const Navbar = () =>{
    return (
        <>
        <div className="navbar-section">
        <div className="navbar">
            <div className="nav-left">
            <h1 className="logo">ALLEN</h1>
            </div>

            <ul className="navbar-center">
            <li>Courses</li>
            <li>Tests</li>
            <li className="new-badge">
                Results <span className="badge">NEW</span>
            </li>
            <li>Study Materials</li>
            <li>Scholarships</li>
            <li>Books</li>
            <li>More</li> 
            </ul>

            <div className="navbar-right">
            <div className="call-icon">
                <FaPhoneAlt color="#0066d3" />
            </div>
            <button className="login-btn">Login</button>
            </div>
        </div>

        <div className="green-banner">
            <span className="offer-text">
            🎯 <span className="highlight">GET UP TO 90% SCHOLARSHIP</span> on NEET Leader & Achiever Online Courses →
            </span>
        </div>
        </div>
    </>
    );
};

export default Navbar;