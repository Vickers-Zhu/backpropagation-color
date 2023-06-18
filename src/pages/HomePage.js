import React, { useEffect } from "react";
import {
  Test,
  Viewport,
  logTestMessage,
  ButtonContainer,
  InputBlock,
} from "../components";

const HomePage = () => {
  useEffect(() => {
    logTestMessage();
  }, []);
  const handleStartButtonClick = () => {
    console.log("Button Start", "clicked");
    // Add your desired logic here
  };
  const handlePauseButtonClick = () => {
    console.log("Button Pause", "clicked");
  };

  return (
    <div>
      <Test />
      <Viewport />
      <InputBlock />
      <ButtonContainer
        handleStartButtonClick={handleStartButtonClick}
        handlePauseButtonClick={handlePauseButtonClick}
      />
      {/* Add more components from the components folder */}
    </div>
  );
};

export default HomePage;
