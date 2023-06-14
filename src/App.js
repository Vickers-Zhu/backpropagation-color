import React, { useState, useEffect } from "react";
import axios from "axios";
import { HomePage } from "./pages";
import { logTestMessage } from "./components";

const App = () => {
  useEffect(() => {}, []);
  return (
    <div>
      <HomePage />
    </div>
  );
};

export default App;
