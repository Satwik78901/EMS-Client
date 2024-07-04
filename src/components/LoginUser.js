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
    <div className="backgroundWrap">
      <div className="position">
        <form onSubmit={handleLogin} className="containerForm">
          <div className="centering-wrapper">
            <div className="section1 text-wrapper">
              <div className="primary-header">Welcome Back!</div>
              <div className="input-position">
                <div className="form-group">
                  <h5 className="input-placeholder" id="email-txt">
                    Email
                    <span className="error-message" id="email-error"></span>
                  </h5>
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-style"
                    style={{ marginBottom: '20px' }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <h5 className="input-placeholder" id="email-txt">
                  Password
                  <span className="error-message" id="email-error"></span>
                </h5>
                <input
                  type="password"
                  className="form-style"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="password-container">
                {' '}
                <a href="/password" className="link">
                  Forgot your password?
                </a>
              </div>
              <div className="button-position">
                <button type="submit" className="button-style">
                  {' '}
                  Login
                </button>
              </div>
            </div>
          </div>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default LoginUser;
