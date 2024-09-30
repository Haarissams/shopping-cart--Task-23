import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import '../src/App.css'
const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  return (
    <Router>
      <div className="app">
        <header>
          <h1>My E-Commerce Site</h1>
          <nav>
            <Link to="/" className="nav-link">Shop</Link>
            <Link to="/cart" className="cart-button">Cart ({cart.length})</Link>

          </nav>
        </header>

        <Routes>
          <Route
            path="/"
            element={<ProductList addToCart={addToCart} removeFromCart={removeFromCart} cart={cart} />}
          />
          <Route path="/cart" element={<Cart cart={cart} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
