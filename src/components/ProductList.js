

import React from 'react';

const ProductList = ({ addToCart, removeFromCart, cart }) => {
  const products = [
    { id: 1, name: 'Product 1', description: 'Pre-Owned Apple iPhone 11 - Carrier Unlocked - 64GB Black (Good)', price: 100, image: require ('../assets/product1.jfif') },
    { id: 2, name: 'Product 2', description: 'Pre-Owned Apple iPhone 11 - Carrier Unlocked - 64GB Black (Good)', price: 200, image: require ('../assets/product2.jfif') },
    { id: 3, name: 'Product 3', description: 'Pre-Owned Apple iPhone 11 - Carrier Unlocked - 64GB Black (Good)', price: 200, image: require ('../assets/product3.jfif') },
    { id: 1, name: 'Product 1', description: 'Pre-Owned Apple iPhone 11 - Carrier Unlocked - 64GB Black (Good)', price: 100, image: require ('../assets/product1.jfif') },
    { id: 2, name: 'Product 2', description: 'Pre-Owned Apple iPhone 11 - Carrier Unlocked - 64GB Black (Good)', price: 200, image: require ('../assets/product2.jfif') },
    { id: 3, name: 'Product 3', description: 'Pre-Owned Apple iPhone 11 - Carrier Unlocked - 64GB Black (Good)', price: 200, image: require ('../assets/product3.jfif') },
    { id: 1, name: 'Product 1', description: 'Pre-Owned Apple iPhone 11 - Carrier Unlocked - 64GB Black (Good)', price: 100, image: require ('../assets/product1.jfif') },
    { id: 2, name: 'Product 2', description: 'Pre-Owned Apple iPhone 11 - Carrier Unlocked - 64GB Black (Good)', price: 200, image: require ('../assets/product2.jfif') },
    { id: 3, name: 'Product 3', description: 'Pre-Owned Apple iPhone 11 - Carrier Unlocked - 64GB Black (Good)', price: 200, image: require ('../assets/product3.jfif') },  

  ];

  const isInCart = (productId) => cart.some(item => item.id === productId);

  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-item">
          <img src={product.image} alt={product.name} className="product-image" />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>${product.price}</p>
          {isInCart(product.id) ? (
            <button onClick={() => removeFromCart(product.id)}>Remove from Cart</button>
          ) : (
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
