import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './CartContext';
import LoginPage from './LoginPage';
import WelcomePage from './WelcomePage';
import CategoryPage from './CategoryPage';
import ClothCategory from './ClothCategory';
import ProductDetail from './ProductDetail';
import CartPage from './CartPage';

function App() {
  return (
    <CartProvider> {}
      <Router>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/cloth-category" element={<ClothCategory />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
