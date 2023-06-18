import React from "react";
import Button from "./Button";
import "./ButtonContainer.css";

const ButtonContainer = ({
  handleStartButtonClick,
  handlePauseButtonClick,
}) => {
  return (
    <div className="button-container">
      <Button label="Button 1" onClick={handleStartButtonClick} />
      <Button label="Button 2" onClick={handlePauseButtonClick} />
    </div>
  );
};

export default ButtonContainer;
