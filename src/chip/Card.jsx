import React, { useState } from "react";
import "./сard.scss"; // Стилі для картки

const Card = ({ title, users, price, isFeatured }) => {
  const [isActive, setIsActive] = useState(false);

  const handleCardClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={`card ${isFeatured ? "card--featured" : ""} ${
        isActive ? "card--active" : ""
      }`}
      onClick={handleCardClick}>
      <h3 data-aos="fade-up" className="card__title">
        {title}
      </h3>
      <p data-aos="fade-up" className="card__users">
        {users}
      </p>
      <div data-aos="fade-up" className="card__price">
        {price}
      </div>
      <button data-aos="fade-up" className="card__button">
        Order
      </button>
    </div>
  );
};

export default Card;
