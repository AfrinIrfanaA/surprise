import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/CartPage.css'; // Import your custom CSS file
import Header from './Header';

function CartPage({ cartItems, updateQuantity, deleteItem }) {
  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleQuantityChange = (id, delta) => {
    const item = cartItems.find((i) => i.id === id);
    if (item) {
      const newQuantity = item.quantity + delta;
      if (newQuantity > 0) {
        updateQuantity(id, newQuantity);
      }
    }
  };

  return (
    <div className="cart-page container my-5">
      <Header/>
      <h1 className="text-center mb-4">Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <div>
          <ul className="list-group mb-3">
            {cartItems.map((item) => (
              <li key={item.id} className="list-group-item d-flex align-items-center">
                <img src={item.image} alt={item.name} className="item-image" />
                <div className="item-details ms-3 flex-grow-1">
                  <h5>{item.name}</h5>
                  <p>Price: ₹{item.price}</p>
                  <div className="d-flex align-items-center">
                    <button
                      className="btn btn-secondary btn-sm me-2"
                      onClick={() => handleQuantityChange(item.id, -1)}
                    >
                      -
                    </button>
                    <p className="mb-0">{item.quantity}</p>
                    <button
                      className="btn btn-secondary btn-sm ms-2"
                      onClick={() => handleQuantityChange(item.id, 1)}
                    >
                      +
                    </button>
                  </div>
                  <p>Total: ₹{item.price * item.quantity}</p>
                  <div className="d-flex">
                    <button className="btn btn-danger btn-sm me-2" onClick={() => deleteItem(item.id)}>
                      Remove
                    </button>
                    {/* Change the 'to' here to route to the BuyPage */}
                    <Link to="/buy" className="btn btn-success btn-sm">
                      Buy Now
                    </Link>
                  </div>
                </div>
              </li>
            ))}
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <strong>Total</strong>
              <span>₹{totalAmount}</span>
            </li>
          </ul>
          <Link to="/buy" className="btn btn-primary">Proceed to Purchase</Link>
        </div>
      )}
    </div>
  );
}

export default CartPage;
