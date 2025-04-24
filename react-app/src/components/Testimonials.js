import React from 'react';

const testimonials = [
    {
        name: "Dan Boyd",
        image: "https://lh3.googleusercontent.com/a/ACg8ocIJ6vUk29NrYbuPWttNmwD8c3Cr20lwPdJYZEC2k2qwMzHtrw=s40-c-rp-mo-br100",
        review: "They just finished a water damaged sheetrock area in our garage, and did an awesome job...",
    },
    {
        name: "Zach Castaneda",
        image: "https://lh3.googleusercontent.com/a-/ALV-UjX_HKLTLnnU8R5lr4Ss38XdSZX6qEImYTrpV3vshwMkKPfqZi1m=s40-c-rp-mo-br100",
        review: "Best price out of four other estimates by far!! Amazing service from start to finish...",
    },
    {
        name: "Neil Mckenna",
        image: "https://lh3.googleusercontent.com/a/ACg8ocIFIvJOQ4k0q6Ltf47vC-RZ-_mvMmbOiXrQ4P2De9g6NFg6jA=s40-c-rp-mo-br100",
        review: "Nexus painting and owner Jessie Kim do amazing work. I highly recommend Nexus Painting Company...",
    },
];

const Testimonials = () => {
    return (
        <div style={{
            backgroundColor: '#f8f9fa',
            padding: '40px 20px',
            borderRadius: '10px',
            width: '100%',
            maxWidth: '1200px',
            margin: 'auto'
        }}>
            <h2 style={{
                textAlign: 'center',
                color: '#333',
                fontFamily: 'Arial, sans-serif'
            }}>What Our Customers Say</h2>

            <div className="row justify-content-center" style={{ marginTop: '20px' }}>
                {testimonials.map((t, i) => (
                    <div key={i} className="col-md-4 col-sm-6" style={{ marginBottom: '20px' }}>
                        <div style={{
                            backgroundColor: 'white',
                            border: '1px solid #ddd',
                            borderRadius: '10px',
                            padding: '15px',
                            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
                        }}>
                            <img
                                src={t.image}
                                alt={`Reviewer ${i + 1}`}
                                style={{ borderRadius: '50%', marginBottom: '10px' }}
                            />
                            <h4 style={{ margin: 0, color: '#007bff' }}>{t.name}</h4>
                            <p style={{ fontSize: '14px', color: '#666' }}>{t.review}</p>
                            <div style={{ color: '#FFD700', fontSize: '18px' }}>★★★★★</div>
                        </div>
                    </div>
                ))}
            </div>

            <p style={{ textAlign: 'center', marginTop: '20px', color: '#555', fontSize: '14px' }}>
                <a href="https://g.co/kgs/wRcyb5w" style={{ color: '#007bff', textDecoration: 'none' }}>
                    Read More Reviews on Google
                </a>
            </p>
        </div>
    );
};

export default Testimonials;
