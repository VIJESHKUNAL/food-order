import React from "react";
import { Link } from "react-router-dom";
import "../styles/cart.css";

const Cart = () => {
  return (
    <div className="cart-container">
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
      <h1>Your Cart</h1>
      <p>Your cart is currently empty.</p>
    </div>
  );
};

export default Cart;
