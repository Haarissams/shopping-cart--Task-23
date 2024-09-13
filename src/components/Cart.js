import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cart }) => {
  const totalItems = cart.reduce((acc, item) => acc + 1, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {totalItems === 0 ? (
        <p>Your cart is empty. <Link to="/">Continue shopping</Link></p>
      ) : (
        <ul>
          {cart.map(item => (
            <li key={item.id}>
              <div className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-item-desc">
                  <h4>{item.name}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
              <span className="cart-item-price">${item.price}</span>
            </li>
          ))}
        </ul>
      )}
      {totalItems > 0 && <button className="checkout-btn">Proceed to Checkout</button>}
    </div>
  );
};

export default Cart;
