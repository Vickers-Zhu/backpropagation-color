import React, { useEffect } from "react";
import { Test, Viewport, logTestMessage } from "../components";

const HomePage = () => {
  useEffect(() => {
    logTestMessage();
  }, []);
  return (
    <div>
      <Test />
      <Viewport />
      {/* Add more components from the components folder */}
    </div>
  );
};

export default HomePage;
