import React, { useState } from 'react';
import './css/LoginPage.css';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useCart();

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (email === 'user@gmail.com' && password === 'user123') {
      console.log('Login successful!');
      login({ email }); 
      navigate('/category'); 
    } else {
      alert('Login failed. Invalid credentials.');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
