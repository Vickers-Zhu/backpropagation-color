import React from "react";
import "./Button.css"; // Import the CSS file for the button styles

const Button = ({ label, onClick }) => {
  return (
    <button className="custom-button" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
