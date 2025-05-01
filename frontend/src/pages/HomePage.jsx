import React, { useEffect, useState } from 'react';
import { fetchWithAuth } from '../utils/fetchWithAuth';
import "../styles/LoginForm.css";

export default function HomePage() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchWithAuth('http://localhost:8000/home/')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error('Error:', err));
  }, []);

  return (
      <div className="container mt-5">
        <h1> {message} 👋🏻</h1>
        <h2>Welcome to the Home Page! 😍 </h2>
      </div>)
  ;
}

