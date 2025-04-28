import React from 'react';

const services = [
    {
        title: 'Full-Service Pool Cleaning',
        description: 'Keep your pool sparkling and swim-ready all year long with our comprehensive cleaning service, including skimming, brushing, vacuuming, and filter maintenance.',
        image: 'https://res.cloudinary.com/duz4vhtcn/video/upload/v1745873801/splashpictureclearly1_it1lkb.mp4',
        type: 'video', // <-- ADDED
        gradient: 'linear-gradient(to bottom right, #4facfe, #00f2fe)'
    },
    {
        title: 'Green to Clean Recovery',
        description: 'Is your pool looking more like a pond? Our green-to-clean service will restore your water clarity and balance, transforming your pool from murky to magnificent in just days.',
        image: 'https://res.cloudinary.com/duz4vhtcn/video/upload/v1745874867/clearly1movingwater_yepu51_kwsbl9.mp4',
        type: 'video', // <-- ADDED
        gradient: 'linear-gradient(to bottom right, #43e97b, #38f9d7)'
    },
    {
        title: 'Weekly Maintenance Plans',
        description: 'Enjoy a stress-free pool experience with our weekly maintenance plans. We handle chemical balancing, debris removal, and equipment checks, so you can just dive in.',
        image: 'https://res.cloudinary.com/duz4vhtcn/video/upload/v1745875080/3rdmovingwaterfinal_kpafuj.mp4',
        type: 'video', // <-- ADDED
        gradient: 'linear-gradient(#2980b9, #6dd5fa)'
    },
    {
        title: 'Pool Equipment Inspections',
        description: 'Avoid unexpected breakdowns with our thorough equipment inspections. We evaluate pumps, filters, heaters, and more — keeping your system running at peak performance.',
        image: 'https://res.cloudinary.com/duz4vhtcn/video/upload/v1745876829/5thfinalvideo_hagsg9.mp4',
        type: 'video', // <-- ADDED
        gradient: 'linear-gradient(to bottom right, #00c6ff, #0072ff)'
    },
];

const ServicesSection = () => {
    return (
        <section style={{ backgroundColor: 'floralwhite' }} id="services" data-stellar-background-ratio="0.5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <div className="section-title">
                            <h2>Our Pool Services</h2>
                            <span className="line-bar">...</span>
                        </div>
                    </div>

                    {services.map((s, i) => (
                        <div className="col-md-6 col-sm-6" key={i}>
                            <div className="media blog-thumb">
                                <div className="media-object media-left">
                                    <a href="blog-detail.html" onClick={(e) => e.preventDefault()}>
                                        {s.type === 'video' ? (
                                            <video
                                                src={s.image}
                                                className="img-responsive"
                                                controls // <-- ADD controls for play/pause
                                                muted
                                                playsInline
                                                style={{ width: '100%', height: 'auto', borderRadius: '5px', cursor: 'pointer' }}
                                            />
                                        ) : (
                                            <img
                                                src={s.image}
                                                className="img-responsive"
                                                alt={s.title}
                                            />
                                        )}
                                    </a>
                                </div>
                                <div className="media-body blog-info" style={{ background: s.gradient }}>
                                    <h3><a href="blog-detail.html">{s.title}</a></h3>
                                    <p style={{ color: 'white' }}>{s.description}</p>
                                    <a style={{ visibility: 'hidden' }} href="blog-detail.html" className="btn section-btn">Read More</a>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
