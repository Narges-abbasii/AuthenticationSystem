import React from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/authService';
import LoginForm from '../components/LoginForm';

export default function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = async (data) => {
  try {
    const res = await login(data.username, data.password);
    console.log("Login success:", res);
    navigate("/home");
  } catch (error) {
    console.error("Login failed:", error);
    alert("Invalid credentials");
  }
};

  return (
      <div className="card p-4 shadow" style={{ width: '100%', maxWidth: '400px', backgroundColor:"#9FB3DF" }}>
        <LoginForm onSubmit={handleLogin} />
      </div>
  );
}
