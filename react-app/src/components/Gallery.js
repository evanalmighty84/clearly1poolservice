import React from 'react';
import Image1 from "../images/6thpicture.jpg"
import Image2 from "../images/7thpicture.jpeg"
import Image3 from "../images/8thpicture.jpg"
import Image4 from "../images/9thpicture.webp"

const galleryItems = [
    {
        image: Image4,
        title: "Clean & Minimal",
        tag: "Product Design",
    },
    {
        image: Image1,
        title: "Studio Bag",
        tag: "Branding",
    },
    {
        image: Image2,
        title: "Frame Design",
        tag: "Photography",
    },
    {
        image: Image3,
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
