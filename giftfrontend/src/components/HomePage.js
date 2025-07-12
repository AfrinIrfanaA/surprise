// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';
import cakes from '../assets/home/cake.jpg';
import chocolates from '../assets/home/c.jpg';
import flowers from '../assets/home/bouquet.jpg';
import hampers from '../assets/home/ham1.jpg';
import Header from '../components/Header';

const HomePage = () => {
  return (
    <div className="homepage">
      <Header />

      <div className="carousel-container">
        <div className="carousel-row">
          <img src={cakes} alt="Cakes" />
          <img src={chocolates} alt="Chocolates" />
          <img src={hampers} alt="Hampers" />
          <img src={flowers} alt="Flowers" />
        </div>
      </div>

      <section className="offers-section">
        <h2>FRESH SURPRISES</h2>
        <p>For Precious Moments</p>
      </section>

      <section className="categories">
        <div className="category-item">
          <Link to="/cakes">
            <img src={cakes} alt="Cake " />
            <p>Cakes</p>
          </Link>
        </div>
        <div className="category-item">
          <Link to="/chocolates">
            <img src={chocolates} alt="Chocolates" />
            <p>Chocolates</p>
          </Link>
        </div>
        <div className="category-item">
          <Link to="/hampers">
            <img src={hampers} alt="Hampers" />
            <p>Hampers</p>
          </Link>
        </div>
        <div className="category-item">
          <Link to="/flowers">
            <img src={flowers} alt="Flowers" />
            <p>Bouquet</p>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
