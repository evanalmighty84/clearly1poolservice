import React, { useEffect } from 'react';

const Footer = () => {
    useEffect(() => {
        const currentYearSpan = document.getElementById('currentYear');
        if (currentYearSpan) {
            currentYearSpan.textContent = new Date().getFullYear();
        }
    }, []);

    return (
        <footer data-stellar-background-ratio="0.5">
            <div className="container">
                <div className="row">

                    <div className="col-md-5 col-sm-12">
                        <div className="footer-thumb footer-info">
                            <h2>Nexus Painting Company</h2>
                            <p>"Your next generation painting company"</p>
                        </div>
                        <div className="phone-contact">
                            <a href="tel:+19729557701" style={{ textDecoration: 'none', color: 'white' }}>
                                CALL US (972) 955-7701
                            </a>
                        </div>
                    </div>

                    <div className="col-md-2 col-sm-4">
                        <div className="footer-thumb">
                            <h2>Company</h2>
                            <ul className="footer-link">
                                <li><a href="#contact">Join our team</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-2 col-sm-4">
                        <div className="footer-thumb">
                            <h2>Services</h2>
                            <ul className="footer-link">
                                <li><a href="#services">Cabinets</a></li>
                                <li><a href="#services">Interiors</a></li>
                                <li><a href="#services">Exteriors</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-4">
                        <div className="footer-thumb">
                            <h2>Find us</h2>
                            <ul className="social-icon">
                                <li>
                                    <a href="https://www.facebook.com/nexuspaintingco" className="fa fa-facebook-square" aria-label="Facebook"></a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-12 col-sm-12">
                        <div className="footer-bottom">
                            <div className="col-md-6 col-sm-5">
                                <div className="copyright-text">
                                    <p>Copyright &copy; <span id="currentYear"></span> Clubhouse Links</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;