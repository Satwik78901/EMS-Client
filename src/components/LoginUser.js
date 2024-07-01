import React, { useState } from 'react';
import axios from 'axios';
import '../LoginUser.css';

const LoginUser = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

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
        // Redirect to another page or perform some actions
      }
    } catch (error) {
      setMessage('Login failed: ' + error.response.data.error);
    }
  };

  return (
    <div className="container">
      <div className="row d-flex justify-content-center mt-5">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <div className="card py-3 px-2">
            <p className="text-center mb-3 mt-2">SIGN IN WITH</p>
            <div className="row mx-auto">
              <div className="col-4">
                <i className="fab fa-twitter"></i>
              </div>
              <div className="col-4">
                <i className="fab fa-facebook"></i>
              </div>
              <div className="col-4">
                <i className="fab fa-google"></i>
              </div>
            </div>
            <div className="division">
              <div className="row">
                <div className="col-3">
                  <div className="line l"></div>
                </div>
                <div className="col-6">
                  <span>OR WITH EMAIL</span>
                </div>
                <div className="col-3">
                  <div className="line r"></div>
                </div>
              </div>
            </div>
            <form className="myform" onSubmit={handleLogin}>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="row">
                <div className="col-md-6 col-12">
                  <div className="form-group form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="stayLoggedIn"
                    />
                    <label className="form-check-label" htmlFor="stayLoggedIn">
                      Stay logged in
                    </label>
                  </div>
                </div>
                <div className="col-md-6 col-12 bn">Forgot password?</div>
              </div>
              <div className="form-group mt-3">
                <button
                  type="submit"
                  className="btn btn-block btn-primary btn-lg"
                >
                  <small>
                    <i className="far fa-user pr-2"></i>Sign In
                  </small>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {message && <p>{message}</p>}
    </div>
  );
};

export default LoginUser;
