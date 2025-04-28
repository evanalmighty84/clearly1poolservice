import React, { useState } from 'react';
import './Navbar.css';
import Logo from '../images/logopoolservice.png'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <section className="navbar custom-navbar navbar-fixed-top" role="navigation">
            <div className="container">
                <div className="navbar-header">
                    <button
                        className="navbar-toggle"
                        data-toggle="collapse"
                        data-target=".navbar-collapse"
                        onClick={toggleMenu}
                    >
                        <span className="icon icon-bar"></span>
                        <span className="icon icon-bar"></span>
                        <span className="icon icon-bar"></span>
                    </button>
                    <div style={{ color: 'white' }} className="logo">
                        <a href="index.html" style={{ display: 'flex', alignItems: 'center' }}>
                            <img
                                src={Logo}
                                alt="Clearly 1 Pool Service Logo"
                                style={{ maxWidth: '200px', height: 'auto', margin: '0' }}
                            />
                        </a>
                    </div>

                </div>

                <div className={`collapse navbar-collapse ${isOpen ? 'in' : ''}`}>
                    <ul className="nav navbar-nav navbar-nav-first">
                        <li><a href="#home" className="smoothScroll">Home</a></li>
                        <li><a href="#about" className="smoothScroll">About</a></li>
                        <li><a href="#services" className="smoothScroll">Services</a></li>
                        <li><a href="#work" className="smoothScroll">Project Gallery</a></li>
                        <li><a href="#contact" className="smoothScroll">Contact</a></li>
                        <li><a href="#contact" className="smoothScroll">Login</a></li>
                    </ul>

                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <a href="https://www.facebook.com/nexuspaintingco">
                                <i className="fa fa-facebook-square"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Navbar;
