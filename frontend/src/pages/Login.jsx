import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');
    
    try {
      const response = await fetch("http://localhost:8000/adanp-back/login.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok && data.status === "success") {
        setSuccessMsg(data.message);
        console.log('Login successful:', data.user);
        // Add redirect after successful login here if needed later
      } else {
        setErrorMsg(data.message || "An error occurred during login.");
      }
    } catch (error) {
      console.error("Login Error:", error);
      setErrorMsg("Failed to connect to the backend server. Is it running?");
    }
  };

  return (
    <div className="login-container">
      <div className="login-left-panel">
        <div className="login-anim-shape shape-1"></div>
        <div className="login-anim-shape shape-2"></div>
        <div className="login-anim-shape shape-3"></div>
        
        <Link to="/" className="login-back-btn">
          &larr; Back to Home
        </Link>
        <div className="login-logo-box">
          <img src="/adanplogo.png" alt="ADANP Logo" className="login-logo" />
        </div>
        <h2 className="login-tagline">ADVANCING NURSING: TRANSFORMING LIVES</h2>
      </div>
      <div className="login-right-panel">
        <div className="login-card-wrapper">
          <div className="login-card">
            <h1 className="login-title">LOGIN</h1>
            {errorMsg && <div className="login-error-msg" style={{ color: '#ff4d4f', marginBottom: '1rem', fontSize: '14px', textAlign: 'center' }}>{errorMsg}</div>}
            {successMsg && <div className="login-success-msg" style={{ color: '#52c41a', marginBottom: '1rem', fontSize: '14px', textAlign: 'center' }}>{successMsg}</div>}
            <form onSubmit={handleLogin} className="login-form">
              <div className="login-input-group">
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="login-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
              </div>
              <div className="login-input-group">
                <input 
                  type="password" 
                  placeholder="Password" 
                  className="login-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required 
                />
                <span className="login-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                    <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" />
                  </svg>
                </span>
              </div>
              <button type="submit" className="login-btn">Login</button>
            </form>
            <p className="login-forgot-password">Forgot Password?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
