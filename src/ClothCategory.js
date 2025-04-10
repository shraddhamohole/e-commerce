import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/ClothCategory.css';

const ClothCategory = () => {
  const [clothes, setClothes] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(res => res.json())
      .then(data => setClothes(data.slice(1, 10))) // get 9 items
      .catch(err => console.error('Error:', err));
  }, []);

  const goToDetail = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="cloth-page">
      <h2>Clothing Collection</h2>
      <div className="cloth-grid">
        {clothes.map(item => (
          <div
            className="cloth-card"
            key={item.id}
            onClick={() => goToDetail(item.id)} 
            style={{ cursor: 'pointer' }}
          >
            <div className="image-container">
              <img src={item.images?.[0]} alt={item.title} />
            </div>
            <h4>{item.title}</h4>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClothCategory;
