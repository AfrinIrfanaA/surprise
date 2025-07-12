import React from 'react';
import '../styles/AboutUs.css';
import about1 from "../assets/ABOUT/a3.jpg";
import about2 from "../assets/ABOUT/a4.jpg";
import about3 from "../assets/ABOUT/a5.jpg";
import cakeImage from "../assets/ABOUT/cakes1.jpg";
import flowerImage from "../assets/ABOUT/flower.jpg";
import chocolateImage from "../assets/ABOUT/chocolate.jpg";
import hamperImage from "../assets/ABOUT/gh.jpg";
import Header from '../components/Header';

const AboutUs = () => {
    return (
        <div className="about-container">
            <Header />
            <h1 className="text-center">About Your Gift Shop</h1>
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={about1} className="d-block w-100" alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img src={about2} className="d-block w-100" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img src={about3} className="d-block w-100" alt="Third slide" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <section className="offers-section">
                <h2 className="text-center">Our Story</h2>
                <p> We understand the importance of giving a gift that reflects love, appreciation, and care. With our curated selection of unique, high-quality products, we strive to make every occasion special.</p>
            </section>

            <section className="collections-section">
                <h2 className="text-center">Explore Our Collections</h2>
                <div className="grid-container">
                    <div className="grid-item">
                        <div className="flip-box">
                            <div className="flip-box-inner">
                                <div className="flip-box-front">
                                    <img src={cakeImage} alt="Cakes" className="img-fluid"/>
                                </div>
                                <div className="flip-box-back">
                                    <h3>Cakes</h3>
                                    <p>Delicious cakes for every occasion.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="flip-box">
                            <div className="flip-box-inner">
                                <div className="flip-box-front">
                                    <img src={flowerImage} alt="Flowers" className="img-fluid"/>
                                </div>
                                <div className="flip-box-back">
                                    <h3>Flowers</h3>
                                    <p>Beautiful flowers to brighten up your day.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="flip-box">
                            <div className="flip-box-inner">
                                <div className="flip-box-front">
                                    <img src={chocolateImage} alt="Chocolates" className="img-fluid"/>
                                </div>
                                <div className="flip-box-back">
                                    <h3>Chocolates</h3>
                                    <p>Exquisite chocolates for the sweet tooth.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="flip-box">
                            <div className="flip-box-inner">
                                <div className="flip-box-front">
                                    <img src={hamperImage} alt="Gift Hampers" className="img-fluid"/>
                                </div>
                                <div className="flip-box-back">
                                    <h3>Gift Hampers</h3>
                                    <p>Carefully curated gift hampers for all occasions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
