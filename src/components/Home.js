import React from 'react';
import { Link } from 'react-router-dom';
import '../Home.css';
import myImage from '../images/Employee.jpg';

const Home = () => {
  return (
    <div className="backgroundWrap">
      <div className="buttonsPosition">
        <Link to="/Login">
          <button className="button-styles">Login</button>
        </Link>
        <Link to="/Features">
          <button className="button-styles">Features</button>
        </Link>
        <Link to="/Contact">
          <button className="button-styles">Contact</button>
        </Link>
      </div>
      <div className="contentWrap">
        <img src={myImage} alt="Employee" className="image-adjust" />
        <div className="text-position">
          <div className="content">
            <h2>Employee Management</h2>
          </div>

          <h2>Your Gateway to Efficient Employee Management</h2>
          <p>
            Our Employee Management System (EMS) is a powerful tool designed to
            help administrators efficiently manage employee records and
            attendance. With a user-friendly interface and comprehensive
            capabilities, EMS simplifies your administrative tasks and enhances
            productivity.
          </p>
          <p>
            Ready to experience the efficiency and ease of our EMS? Click on the{' '}
            <b>Login</b> button to access your dashboard. If you are new to EMS
            and want to learn more, explore our <b>Features</b> page to discover
            what we offer. For any inquiries, visit our <b>Contact</b> page and
            get in touch with us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
