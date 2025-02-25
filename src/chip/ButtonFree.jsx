import React, { useState } from "react";

const ButtonFree = ({
  text,
  backgroundColor,
  textColor,
  hoverBackgroundColor,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    backgroundColor: isHovered ? hoverBackgroundColor : backgroundColor,
    color: textColor,
    border: "none",
    borderRadius: "68px",
    padding: "10px 20px",
    cursor: "pointer",
    transition: "background-color 0.3s", // Додаємо анімацію для плавності зміни кольору
  };

  return (
    <button
      style={buttonStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      {text}
    </button>
  );
};

export default ButtonFree;
