import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from './CartContext';
import './css/ProductDetail.css';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart, user } = useCart();

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.error('Error fetching product details:', err));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  const handleAddToCart = () => {
    if (!user) {
      alert('Please log in to add items to your cart');
      return;
    }
    addToCart(product);
    alert('Item added to cart!');
  };

  return (
    <div className="product-detail">
      <img src={product.images[0]} alt={product.title} className="product-detail-img" />
      <div className="product-detail-info">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h3>${product.price}</h3>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductDetail;
