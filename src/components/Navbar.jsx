import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import '../stylying/navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () =>{
    return (
        <>
        <div className="navbar-section">
        <div className="navbar">
            <div className="nav-left">
            <Link to="/">
            <h1 className="logo">ALLEN</h1>
            </Link>
            </div>

            <ul className="navbar-center">
            <Link to = "/courses">Courses</Link>
            <Link to = "/testseries">Tests</Link>
            <Link to ="/results" className="new-badge">
                Results <span className="badge">NEW</span>
            </Link>
            <li>Study Materials</li>
            <li>Scholarships</li>
            <li>Books</li>
            <Link to="/more">More</Link>
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