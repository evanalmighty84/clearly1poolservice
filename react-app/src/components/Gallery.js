import React from 'react';

const galleryItems = [
    {
        image: "https://res.cloudinary.com/duz4vhtcn/image/upload/v1737709455/4_szkx01.png",
        title: "Clean & Minimal",
        tag: "Product Design",
    },
    {
        image: "https://res.cloudinary.com/duz4vhtcn/image/upload/v1737709455/Cabinet-BeforeAfter-2_cvinr8.jpg",
        title: "Studio Bag",
        tag: "Branding",
    },
    {
        image: "https://res.cloudinary.com/duz4vhtcn/image/upload/v1737709454/3_flilvc.jpg",
        title: "Frame Design",
        tag: "Photography",
    },
    {
        image: "https://res.cloudinary.com/duz4vhtcn/image/upload/v1737709453/2_omeupu.png",
        title: "Paint Work",
        tag: "Art, Design",
    },
];

const Gallery = () => {
    return (
        <section id="work" data-stellar-background-ratio="0.5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <div className="section-title">
                            <h2>Project Gallery</h2>
                            <span className="line-bar">...</span>
                        </div>
                    </div>

                    {galleryItems.map((item, i) => (
                        <div className="col-md-3 col-sm-6" key={i}>
                            <div className="work-thumb">
                                <a href={item.image} className="image-popup">
                                    <img src={item.image} className="img-responsive" alt="Work" />
                                    <div className="work-info">
                                        <h3>{item.title}</h3>
                                        <small>{item.tag}</small>
                                    </div>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
