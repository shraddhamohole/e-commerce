import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaShoppingBasket } from 'react-icons/fa'; 
import './CategoryPage.css';

function CategoryPage() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(res => res.json())
      .then(data => setCategories(data.slice(0, 5))) 
      .catch(err => console.error('Error fetching categories:', err));
  }, []);

  const handleNavigate = (categoryName) => {
    if (categoryName.toLowerCase().includes('clothes')) {
      navigate('/cloth-category');
    }
  };

  const goToCart = () => {
    navigate('/cart');
  };

  return (
    <div className="category-page">
      <div className="cart-icon" onClick={goToCart}>
        <FaShoppingBasket size={24} />
      </div>

      <h2>Choose a Category</h2>
      <div className="category-options">
        {categories.map(category => (
          <div className="category-item" key={category.id}>
            <img
              src={category.image}
              alt={category.name}
              className="category-img"
            />
            <button
              className="category-btn"
              onClick={() => handleNavigate(category.name)}
            >
              {category.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
