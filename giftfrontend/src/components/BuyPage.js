import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/BuyPage.css'; // Import your custom CSS file
import Header from './Header';

function BuyPage({ cartItems, clearCart }) {
  // Calculate the total amount by summing the price * quantity for each item
  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Get the current date and time for purchase details
  const currentTime = new Date().toLocaleString(); 

  return (
    <div className="buy-page container my-5">
      <Header />
      <h1 className="text-center mb-4">Purchase Details</h1>
      <p className="text-center mb-4">Time of Purchase: {currentTime}</p>
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
                  <p>Quantity: {item.quantity}</p>
                  <p>Total: ₹{item.price * item.quantity}</p>
                </div>
              </li>
            ))}
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <strong>Total</strong>
              <span>₹{totalAmount}</span>
            </li>
          </ul>
          <button className="btn btn-danger" onClick={clearCart}>Clear History</button>
        </div>
      )}
    </div>
  );
}

export default BuyPage;
