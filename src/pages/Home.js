import React from "react";
import logo from "../images/images.jpg"; // Ensure you have a logo.svg in the src directory
import "../styles/home.css";
import { Link } from "react-router-dom";

const foodItems = [
  { id: 1, name: "Pizza", description: "Delicious cheese pizza", price: "$10" },
  { id: 2, name: "Burger", description: "Juicy beef burger", price: "$8" },
  { id: 3, name: "Sushi", description: "Fresh sushi rolls", price: "$15" },
  { id: 4, name: "Salad", description: "Healthy green salad", price: "$7" },
  {
    id: 5,
    name: "Pasta",
    description: "Italian pasta with sauce",
    price: "$12",
  },
  { id: 6, name: "Tacos", description: "Mexican tacos", price: "$9" },
  { id: 7, name: "Steak", description: "Grilled steak", price: "$20" },
  {
    id: 8,
    name: "Sandwich",
    description: "Ham and cheese sandwich",
    price: "$6",
  },
  { id: 9, name: "Soup", description: "Hot chicken soup", price: "$5" },
  { id: 10, name: "Ice Cream", description: "Vanilla ice cream", price: "$4" },
];

const Home = () => {
  return (
    <div className="home-container">
      <div className="navbar">
        <div className="nav-buttons">
          <Link to="/" className="nav-button">
            Home
          </Link>
          <Link to="/Contact" className="nav-button">
            Contact
          </Link>
          <Link to="/About" className="nav-button">
            About Us
          </Link>
        </div>
      </div>
      <div className="hero-section">
        <img src={logo} className="logo" alt="logo" />
        <h1 className="hero-text">Welcome to Food Order</h1>
      </div>
      <div className="menu-section">
        <h2 className="menu-title">Our Menu</h2>
        <div className="food-menu">
          {foodItems.map((item) => (
            <div key={item.id} className="food-item">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
