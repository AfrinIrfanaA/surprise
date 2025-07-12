import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Hampers.css';
import Header from '../components/Header';

import f1 from "../assets/HAMPERS/f1.jpg";
import f2 from "../assets/HAMPERS/f2.jpg";
import f3 from "../assets/HAMPERS/f3.jpg";
import f4 from "../assets/HAMPERS/f4.jpg";
import f5 from "../assets/HAMPERS/f5.jpg";
import f6 from "../assets/HAMPERS/f6.jpg";
import f7 from "../assets/HAMPERS/f7.jpg";
import f8 from "../assets/HAMPERS/f8.jpg";
import f9 from "../assets/HAMPERS/f9.jpg";

function HamperPage({ addToCart }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [showCustomization, setShowCustomization] = useState(false);
  const [currentHamper, setCurrentHamper] = useState(null);
  const [customization, setCustomization] = useState({
    quantity: 1,
    giftMessage: '',
  });

  const hampers = [
    { id: 1, name: 'Festive Hamper', price: 499, image: f1 },
    { id: 2, name: 'Deluxe Hamper', price: 599, image: f2 },
    { id: 3, name: 'Classic Hamper', price: 699, image: f3 },
    { id: 4, name: 'Premium Hamper', price: 799, image: f4 },
    { id: 5, name: 'Luxury Hamper', price: 899, image: f5 },
    { id: 6, name: 'Elegance Hamper', price: 999, image: f6 },
    { id: 7, name: 'Special Hamper', price: 1099, image: f7 },
    { id: 8, name: 'Gourmet Hamper', price: 1199, image: f8 },
    { id: 9, name: 'Exclusive Hamper', price: 1299, image: f9 },
  ];

  const filteredHampers = hampers.filter((hamper) =>
    hamper.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCustomize = (hamper) => {
    setCurrentHamper(hamper);
    setShowCustomization(true);
  };

  const handleAddToCart = () => {
    if (currentHamper) {
      addToCart({
        id: currentHamper.id,
        name: currentHamper.name,
        price: currentHamper.price,
        image: currentHamper.image,
        quantity: customization.quantity,
      });
    }
  };
  

  return (
    <div className="hampers-page container">
      <Header />
      <div className="search-bar input-group my-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search for hampers..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="row">
        {filteredHampers.map((hamper) => (
          <div key={hamper.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src={hamper.image}
                className="card-img-top"
                alt={hamper.name}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{hamper.name}</h5>
                <p className="card-text">Price: ₹{hamper.price}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleCustomize(hamper)}
                >
                  Customize
                </button>
                {showCustomization && currentHamper.id === hamper.id && (
                  <div className="customization-box">
                    <h4>Customize your hamper</h4>
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

export default HamperPage;
