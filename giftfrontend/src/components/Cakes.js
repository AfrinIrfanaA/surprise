// src/pages/CakePage.jsx
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Cakes.css';
import Header from '../components/Header';

function CakePage({ addToCart }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [showCustomization, setShowCustomization] = useState(false);
  const [currentCake, setCurrentCake] = useState(null);
  const [customization, setCustomization] = useState({
    quantity: 1,
    topics: '',
    kg: 1,
  });

  const cakes = [
    { id: 1, name: 'Vanilla Cake', price: 1500, image: '/CAKES/c (8).jpg' },
    { id: 2, name: 'Chocolate Cake', price: 2600, image: '/CAKES/c (3).jpg' },
    { id: 3, name: 'Black Forest', price: 600, image: '/CAKES/c (2).jpg' },
    { id: 4, name: 'White Forest', price: 800, image: '/CAKES/c (9).jpg' },
    { id: 5, name: 'Rainbow Cake', price: 1300, image: '/CAKES/c (6).jpg' },
    { id: 6, name: 'Strawberry Cake', price: 2600, image: '/CAKES/c (7).jpg' },
    { id: 7, name: 'Mango Cake', price: 2600, image: '/CAKES/c (5).jpg' },
    { id: 8, name: 'Red Velvet Cake', price: 2600, image: '/CAKES/c (1).jpg' },
    { id: 9, name: 'Ice-cream Cake', price: 2600, image: '/CAKES/c (4).jpg' },
  ];

  const filteredCakes = cakes.filter((cake) =>
    cake.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCustomize = (cake) => {
    setCurrentCake(cake);
    setShowCustomization(true);
  };

  const handleAddToCart = () => {
    if (currentCake) {
      addToCart({
        ...currentCake,
        quantity: customization.quantity,
        topics: customization.topics,
        kg: customization.kg,
      });
    }
    setShowCustomization(false);
  };

  return (
    <div className="cake-page container">
      <Header />
      <div className="search-bar input-group my-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search for cakes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>

      <div className="row">
        {filteredCakes.map((cake) => (
          <div key={cake.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src={cake.image}
                className="card-img-top"
                alt={cake.name}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{cake.name}</h5>
                <p className="card-text">Price: ₹{cake.price}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleCustomize(cake)}
                >
                  Customize
                </button>
                {showCustomization && currentCake.id === cake.id && (
                  <div className="customization-box">
                    <h4>Customize your cake</h4>
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
                        <label>Topics</label>
                        <input
                          type="text"
                          className="form-control"
                          value={customization.topics}
                          onChange={(e) =>
                            setCustomization({ ...customization, topics: e.target.value })
                          }
                        />
                      </div>
                      <div className="form-group">
                        <label>Weight (kg)</label>
                        <input
                          type="number"
                          className="form-control"
                          value={customization.kg}
                          onChange={(e) =>
                            setCustomization({ ...customization, kg: e.target.value })
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

export default CakePage;
