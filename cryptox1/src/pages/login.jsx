import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import Link from react-router-dom

function LoginPage({ setAuthenticated }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const login = () => {
    if (username === "leo messi" && password === "goat") {
      setAuthenticated(true);
      navigate('/home');
    } else {
      alert("Invalid username or password. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>CRYPTO WALLET </h1>
        <form id="loginForm" onSubmit={login}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <Link to="/signup">Sign up</Link></p> {/* Example usage of Link */}
      </div>
    </div>
  );
}

export default LoginPage;

