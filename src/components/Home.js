// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../Home.css';

const Home = () => {
  return (
    <div className="backgroundWrap">
      <div className="buttonsPosition">
        <Link to="/Login">
          <button className="button-styles">Login</button>
        </Link>
        <button className="button-styles">Feautures</button>
        <button className="button-styles">Contact</button>
      </div>
    </div>
  );
};

export default Home;
