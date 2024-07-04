// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../Home.css';

const Home = () => {
  return (
    <div className="backgroundWrap">
      <div className="buttonsPosition">
        <Link to="/Login">
          <button>Login</button>
        </Link>

        <button>Feautures</button>
        <button>Contact</button>
      </div>
    </div>
  );
};

export default Home;
