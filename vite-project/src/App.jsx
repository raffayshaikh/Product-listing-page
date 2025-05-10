import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Update imports
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Cart from './Components/Cart'; // Make sure Cart is imported correctly

const App = () => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Synchronize cart state with localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <Router> {/* Wrap everything inside Router */}
      <Navbar cart={cart} /> {/* Navbar is always visible */}
      <Routes> {/* Replace Switch with Routes */}
        {/* Route for Home Page */}
        <Route path="/" element={<Home setCart={setCart} />} />
        
        {/* Route for Cart Page */}
        <Route path="/cart" element={<Cart cart={cart} />} />
      </Routes>
    </Router>
  );
};

export default App;
