import React from 'react';

const ProductItem = ({ product, cart, onAddToCart, onRemoveFromCart }) => {
  const isInCart = cart.find(item => item.id === product.id);

  return (
    <div className="product-item">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      {isInCart ? (
        <button onClick={() => onRemoveFromCart(product)}>Remove from Cart</button>
      ) : (
        <button onClick={() => onAddToCart(product)}>Add to Cart</button>
      )}
    </div>
  );
};

export default ProductItem;
