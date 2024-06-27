import React, { useState, useEffect } from "react";
import FoodItem from "../pages/foodItem";
import pizzaImage from "../images/pizzaimg.png";
import burgerImage from "../images/burgerimg.png";
import sushiImage from "../images/traditional-fresh-japanese-sushi-rolls-removebg-preview.png";
import pastaImage from "../images/delicious-pasta-plate.png";
import tacosImage from "../images/tacosimg.png";
import steakImage from "../images/well-done-piece-steak-wooden-board.png";
import sandwichImage from "../images/sandimg.png";
import soupImage from "../images/delicious-autumn-soup-assortment.png";
import iceCreamImage from "../images/view-delicious-frozen-ice-cream-dessert-with-bananas.png";
import backgroundImage1 from "../images/Designer.png";
// import backgroundImage2 from "../images/another-background.jpg";
// import backgroundImage3 from "../images/yet-another-background.jpg";
import "../styles/menu.css";

const foodItems = [
  {
    id: 1,
    name: "Pizza",
    description: "Delicious cheese pizza",
    price: "$10",
    image: pizzaImage,
  },
  {
    id: 2,
    name: "Burger",
    description: "Juicy beef burger",
    price: "$8",
    image: burgerImage,
  },
  {
    id: 3,
    name: "Sushi",
    description: "Fresh sushi rolls",
    price: "$15",
    image: sushiImage,
  },
  {
    id: 4,
    name: "Pasta",
    description: "Italian pasta with sauce",
    price: "$12",
    image: pastaImage,
  },
  {
    id: 5,
    name: "Tacos",
    description: "Mexican tacos",
    price: "$9",
    image: tacosImage,
  },
  {
    id: 6,
    name: "Steak",
    description: "Grilled steak",
    price: "$20",
    image: steakImage,
  },
  {
    id: 7,
    name: "Sandwich",
    description: "Ham and cheese sandwich",
    price: "$6",
    image: sandwichImage,
  },
  {
    id: 8,
    name: "Soup",
    description: "Hot chicken soup",
    price: "$5",
    image: soupImage,
  },
  {
    id: 9,
    name: "Ice Cream",
    description: "Vanilla ice cream",
    price: "$4",
    image: iceCreamImage,
  },
];

const backgroundImages = [backgroundImage1]; // Define the background images array

const MenuSection = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
    }, 5000); // Change background every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="menu-section"
      style={{
        backgroundImage: `url(${backgroundImages[backgroundIndex]})`,
        width: "auto",
      }}
    >
      <div className="overlay">
        <h2 className="menu-title">Our Menu</h2>
        <div className="food-menu">
          {foodItems.map((item) => (
            <FoodItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuSection;
