import React from 'react';
import Image from '../images/Clearly1animation.gif'
import Image2 from '../images/clipart2.png'

const AboutSection = () => {
    return (
        <section id="about" data-stellar-background-ratio="0.5">
            <div className="container">
                <div className="row">

                    <div className="col-md-5 col-sm-6">
                        <div className="about-info">
                            <div className="section-title">
                                <h2>Let my creations bring your imagination to life</h2>
                                <span className="line-bar">...</span>
                            </div>
                            <p>A custom built dessert will bring your event to life</p>
                            <p></p>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6">
                        <div className="about-info skill-thumb">
                            <img width= "300px"
                                src={Image2}
                                alt="Paint Roller"
                            />
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-12">
                        <div className="about-image">
                            <img
                                src={Image}
                                className="img-responsive"
                                alt="Painting Animation"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;
