import React from 'react';

const HeroSection = () => {
    return (
        <section id="home" data-stellar-background-ratio="0.5">
            <div className="overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <div className="home-info">
                            <h1 style={{ fontStyle: 'italic', fontFamily: 'ltc-bodoni-175' }}>
                                "We take pride in the work that we do."
                            </h1>
                            <a href="tel:+19729557701" className="btn section-btn smoothScroll">Call us Now</a>
                            <span>
                <a href="tel:+19729557701" style={{ textDecoration: 'none', color: 'inherit' }}>
                  CALL US (972) 955-7701
                </a>
                <small>For any inquiry</small>
              </span>
                        </div>
                    </div>

                    <div className="col-md-6 col-sm-6">
                        <div className="home-video">
                            <div className="embed-responsive embed-responsive-16by9">
                                <video
                                    src="https://res.cloudinary.com/duz4vhtcn/video/upload/f_auto:video,q_auto/v1732285272/nexuspaintingco_2_1.2_mbp1m5.mp4"
                                    autoPlay
                                    loop
                                    muted
                                    controls
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;
