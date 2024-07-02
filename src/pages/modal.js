import React, { useState, useContext } from "react";
import "../styles/modal.css";
import { CartContext } from "../Context/cartcontext.js";

const Modal = ({ item, isOpen, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart({ ...item, quantity });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <img src={item.image} alt={item.name} className="modal-food-image" />
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <p>{item.price}</p>
        <div className="quantity-control">
          <button onClick={handleDecrease}>-</button>
          <span>{quantity}</span>
          <button onClick={handleIncrease}>+</button>
        </div>
        <button className="add-to-cart-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Modal;
