import React from 'react';

const services = [
    {
        title: 'Unique Extravagant Cakes',
        description: 'Our custom cakes are more than desserts — they\'re edible art, tailored to your theme and bursting with flavor. Perfect for birthdays, celebrations, and unforgettable events that deserve a show-stopping centerpiece.',
        image: 'https://scontent-hou1-1.xx.fbcdn.net/v/t1.6435-9/96149612_1474101946106203_2043495119599960064_n.jpg?stp=c0.181.1362.1362a_dst-jpg_s552x414_tt6&_nc_cat=109&ccb=1-7&_nc_sid=969c58&_nc_ohc=2kHGo27gpzAQ7kNvwFk7IAp&_nc_oc=Adne4SdrrBHGMQYrLJ1Vyyfd94LRuKqwhVwJePozsTbzSbwwBx3IcGP6STlLIwzgH2QM0IsY3Am9AzstMLStjDzv&_nc_zt=23&_nc_ht=scontent-hou1-1.xx&_nc_gid=DPJwCvELPBblB2r_ABICvA&oh=00_AfFakruUgjKL3ToK2nThOUAOWfs7_TLst7M5y91rmXao9g&oe=6820B74A',
        gradient: 'linear-gradient(to bottom right, #f5c2d5, #de4e7f)'
    },
    {
        title: 'Custom Cookies',
        description: 'Add a personalized touch to your event with hand-decorated cookies that look as good as they taste. Whether you\'re celebrating a baby shower, wedding, or holiday, our cookies are a sweet way to impress your guests.',
        image: 'https://scontent-hou1-1.xx.fbcdn.net/v/t1.6435-9/67453449_1228487680667632_9169535128605556736_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=cpvPSdRRDQ4Q7kNvwFGarQo&_nc_oc=AdkpZlBkvvO5lm8eMIggpbdMMpbHsSB0x_7K0K4gU6Abv8IfYKdh3ebXQkfhfL-BoINlWaZQ8OLkq377qAqU5vT9&_nc_zt=23&_nc_ht=scontent-hou1-1.xx&_nc_gid=KKoaFOvsOoc2SM4Y3dkd3w&oh=00_AfHOY45L6wCB1jJ7zf1R1I_PlRqVlbv86ThhvOrYI_n8Jw&oe=6820EFE7',
        gradient: 'linear-gradient(#7fc87f, #9198e5)'
    },
    {
        title: 'Speciality Desserts',
        description: 'Indulge in our handcrafted specialty desserts, made with love and the finest ingredients for every occasion. From elegant mini treats to decadent bites, we deliver delight in every detail..',
        image: 'https://scontent-hou1-1.xx.fbcdn.net/v/t1.6435-9/45142593_1052116208304781_6677608469404581888_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=xWGUDNGyC84Q7kNvwHo7_XB&_nc_oc=AdkirHDmQFjCcX0svFIMQqAHB71X_NnLyVZdxlsLBOBntaH77goATeSglTon7Hgz_ebhiNLbX6PDgsNAN_uv5PRd&_nc_zt=23&_nc_ht=scontent-hou1-1.xx&_nc_gid=nFkBrAieQzh_1hxwKZei0g&oh=00_AfGoyIk_0Fk-J8VTkS4ay5M3wVDyd7zg9ppR-XKFZjAHlQ&oe=6820FCB7',
        gradient: 'linear-gradient(#e66465, #9198e5)'
    },
    {
        title: 'Gingerbread houses',
        description: 'Step into a whimsical world with our charming gingerbread houses, crafted with candy-coated creativity. They make festive centerpieces and tasty traditions your family and friends will love.',
        image: 'https://scontent-hou1-1.xx.fbcdn.net/v/t1.6435-9/48359745_1079525892230479_4367078959381217280_n.jpg?stp=c0.169.1536.1536a_dst-jpg_s552x414_tt6&_nc_cat=105&ccb=1-7&_nc_sid=969c58&_nc_ohc=Ha2bIxLBFDQQ7kNvwGwb5qr&_nc_oc=AdnqIbgg08g00dh27muFu-Tv0zxKSYf88STsqmqBQtpx5loXxO0ENE8XSpfSxj190mZWzmyL7d3NXmEbfTLZaihw&_nc_zt=23&_nc_ht=scontent-hou1-1.xx&_nc_gid=xz_DmFk6Fq-rlu01hrdmGQ&oh=00_AfFJOxvku0cpTxiThY6NNCR1QMW7cVXlBzz2oUOmhu_TKA&oe=6820D3E1',
        gradient: 'linear-gradient(to bottom right, #f5c2d5, #de4e7f)'
    },
];

const ServicesSection = () => {
    return (
        <section style={{ backgroundColor: 'floralwhite' }} id="services" data-stellar-background-ratio="0.5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <div className="section-title">
                            <h2>Services</h2>
                            <span className="line-bar">...</span>
                        </div>
                    </div>

                    {services.map((s, i) => (
                        <div className="col-md-6 col-sm-6" key={i}>
                            <div className="media blog-thumb">
                                <div className="media-object media-left">
                                    <a href="blog-detail.html">
                                        <img src={s.image} className="img-responsive" alt={s.title} />
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
