// src/components/ProductGrid.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProductGrid({ products, onAddToCart }) {
  return (
    <div className="row">
      {products.map((product) => (
        <div key={product.id} className="col-md-4 mb-4">
          <div className="card h-100">
            <img
              src={product.image}
              className="card-img-top"
              alt={product.name}
              style={{ height: '200px', objectFit: 'cover' }}
            />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">Price: ₹{product.price}</p>
              <button
                className="btn btn-primary"
                onClick={() => onAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductGrid;
