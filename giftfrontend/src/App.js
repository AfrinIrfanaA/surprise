import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../src/components/HomePage';
import AboutUs from '../src/components/AboutUs';
import CakePage from '../src/components/Cakes';
import ChocolatePage from '../src/components/Chocolates';
import HamperPage from '../src/components/Hampers';
import BouquetPage from '../src/components/Flowers';
import CartPage from '../src/components/CartPage';
import BuyPage from '../src/components/BuyPage';
import ContactPage from '../src/components/ContactPage';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      }
      return [...prevItems, item];
    });
  };

  const updateQuantity = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const deleteItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cakes" element={<CakePage addToCart={addToCart} />} />
        <Route path="/chocolates" element={<ChocolatePage addToCart={addToCart} />} />
        <Route path="/hampers" element={<HamperPage addToCart={addToCart} />} />
        <Route path="/flowers" element={<BouquetPage addToCart={addToCart} />} />
        <Route
          path="/cart"
          element={
            <CartPage
              cartItems={cartItems}
              updateQuantity={updateQuantity}
              deleteItem={deleteItem}
            />
          }
        />
        <Route
          path="/buy"
          element={
            <BuyPage cartItems={cartItems} clearCart={clearCart} />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
