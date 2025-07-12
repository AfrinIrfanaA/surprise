// src/components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import { FaBars } from 'react-icons/fa';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header-container">
      <div className="header-left">
        <h1 className="logo">Surprise</h1>
      </div>
      <div className={`header-right ${isMobileMenuOpen ? 'open' : ''}`}>
        <Link to="/" className="header-link">Home</Link>
        <Link to="/about" className="header-link">About</Link>
        <Link to="/contact" className="header-link">Contact</Link>
        <Link to="/cart" className="header-link">CartPage</Link>
        <Link to="/buy" className="header-link">Buy</Link>
      </div>
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        <FaBars />
      </div>
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <Link to="/" className="mobile-link" onClick={toggleMobileMenu}>Home</Link>
          <Link to="/about" className="mobile-link" onClick={toggleMobileMenu}>About</Link>
          <Link to="/contact" className="mobile-link" onClick={toggleMobileMenu}>Contact</Link>
          <Link to="/cart" className="mobile-link" onClick={toggleMobileMenu}>CartPage</Link>
          <Link to="/buy" className="mobile-link" onClick={toggleMobileMenu}>Buy</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
