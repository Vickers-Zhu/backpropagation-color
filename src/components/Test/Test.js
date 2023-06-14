import React, { useState, useEffect } from "react";
import axios from "axios";

const Test = () => {
  const [backpropagationData, setBackpropagationData] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:3001/backpropagation-data")
      .then((response) => {
        setBackpropagationData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching backpropagation data:", error);
      });
  }, []);

  return (
    <div>
      <h2>Backpropagation Data:</h2>
      <pre>{backpropagationData}</pre>
    </div>
  );
};

export default Test;
