import React, { useState } from 'react';
import './Navbar.css';

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
                        <a href="index.html">
                            <img
                                src="https://res.cloudinary.com/duz4vhtcn/image/upload/v1744404935/Caroles_zxigsb.png"
                                alt="Caroles Convectionery Creations Logo"
                                style={{ maxWidth: '200px', height: 'auto', margin: '0 auto' }}
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
