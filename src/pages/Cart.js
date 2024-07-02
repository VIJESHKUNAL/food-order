import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/cartcontext";
import logo from "../images/images.jpg"; // Ensure you have a logo image in the src/images directory
import background from "../images/Designer.png"; // Ensure you have a background image in the src/images directory
import "../styles/cart.css";

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const handleRemove = (item) => {
    removeFromCart(item);
  };

  return (
    <div
      className="cart-container"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="navbar">
        <img src={logo} className="logo" alt="logo" />
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
          <Link to="/Cart" className="nav-button cart-button">
            Cart
          </Link>
        </div>
      </div>
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button
                className="remove-button"
                onClick={() => handleRemove(item)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <button className="checkout-button">Proceed to Checkout</button>
    </div>
  );
};

export default Cart;
