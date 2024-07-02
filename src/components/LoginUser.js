import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../LoginUser.css'; // Make sure to adjust the path as needed

const LoginUser = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8084/auth/signin', {
        email: email,
        password: password,
      });

      if (response.status === 200) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('refreshToken', response.data.refreshToken);
        setMessage('Login successful');
        navigate('/employees'); // Redirect to home or dashboard
      }
    } catch (error) {
      setMessage(
        'Login failed: ' + (error.response?.data?.error || error.message)
      );
    }
  };

  return (
    <div className="form-container">
      <div className="form">
        <h2>Sign In</h2>
        <form onSubmit={handleLogin} className="formClass">
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <input type="checkbox" id="stayLoggedIn" />
            <label htmlFor="stayLoggedIn">Stay logged in</label>
          </div>
          <div>
            <button type="submit">Sign In</button>
          </div>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default LoginUser;
