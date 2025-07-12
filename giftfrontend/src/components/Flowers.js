// src/pages/BouquetPage.jsx
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Hampers.css'; // Can reuse hamper styles
import Header from '../components/Header';

import f1 from "../assets/BOUQUET/b1.jpg";
import f2 from "../assets/BOUQUET/b2.jpg";
import f3 from "../assets/BOUQUET/b3.jpg";
import f4 from "../assets/BOUQUET/b4.jpg";
import f5 from "../assets/BOUQUET/b5.jpg";
import f6 from "../assets/BOUQUET/b6.jpg";
import f7 from "../assets/BOUQUET/b7.jpg";
import f8 from "../assets/BOUQUET/b8.jpg";
import f9 from "../assets/BOUQUET/b9.jpg";

function BouquetPage({ addToCart }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [showCustomization, setShowCustomization] = useState(false);
  const [currentBouquet, setCurrentBouquet] = useState(null);
  const [customization, setCustomization] = useState({
    quantity: 1,
    giftMessage: '',
  });


  const bouquets = [
    { id: 1, name: 'Rose Bouquet', price: 499, image: f1 },
    { id: 2, name: 'Tulip Bouquet', price: 599, image: f2 },
    { id: 3, name: 'Lily Bouquet', price: 699, image: f3 },
    { id: 4, name: 'Mixed Bouquet', price: 799, image: f4 },
    { id: 5, name: 'Orchid Bouquet', price: 899, image: f5 },
    { id: 6, name: 'Sunflower Bouquet', price: 999, image: f6 },
    { id: 7, name: 'Carnation Bouquet', price: 1099, image: f7 },
    { id: 8, name: 'Daisy Bouquet', price: 1199, image: f8 },
    { id: 9, name: 'Lavender Bouquet', price: 1299, image: f9 },
  ];



  const filteredBouquets = bouquets.filter((bouquet) =>
    bouquet.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCustomize = (bouquet) => {
    setCurrentBouquet(bouquet);
    setShowCustomization(true);
  };

  const handleAddToCart = () => {
    if (currentBouquet) {
      addToCart({
        id: currentBouquet.id,
        name: currentBouquet.name,
        price: currentBouquet.price,
        image: currentBouquet.image,
        quantity: customization.quantity,
        giftMessage: customization.giftMessage,
      });
    }
    setShowCustomization(false);
  };
  

  return (
    <div className="bouquet-page container">
      <Header />
      <div className="search-bar input-group my-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search for bouquets..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="row">
        {filteredBouquets.map((bouquet) => (
          <div key={bouquet.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src={bouquet.image}
                className="card-img-top"
                alt={bouquet.name}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{bouquet.name}</h5>
                <p className="card-text">Price: ₹{bouquet.price}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleCustomize(bouquet)}
                >
                  Customize
                </button>
                {showCustomization && currentBouquet.id === bouquet.id && (
                  <div className="customization-box">
                    <h4>Customize your bouquet</h4>
                    <form>
                      <div className="form-group">
                        <label>Quantity</label>
                        <input
                          type="number"
                          className="form-control"
                          value={customization.quantity}
                          onChange={(e) =>
                            setCustomization({ ...customization, quantity: e.target.value })
                          }
                        />
                      </div>
                      <div className="form-group">
                        <label>Gift Message</label>
                        <input
                          type="text"
                          className="form-control"
                          value={customization.giftMessage}
                          onChange={(e) =>
                            setCustomization({ ...customization, giftMessage: e.target.value })
                          }
                        />
                      </div>
                      <button
                        type="button"
                        className="btn btn-success"
                        onClick={handleAddToCart}
                      >
                        Add to Cart
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BouquetPage;
