import React from 'react';
import { useCart } from './CartContext';

const CartPage = () => {
  const { cart, user } = useCart();

  if (!user) return <p>Please login to view your cart.</p>;

  return (
    <div>
      <h2>{user.email}'s Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              <img src={item.images[0]} alt={item.title} width={50} />
              {item.title} - ${item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
