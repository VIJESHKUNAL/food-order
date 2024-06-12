import React from "react";
import { Link } from "react-router-dom";
import "../styles/about.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">About Us</h1>
        <p className="about-text">
          We are passionate about delivering the best food experience...
        </p>
        <Link to="/" className="nav-button">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default About;
