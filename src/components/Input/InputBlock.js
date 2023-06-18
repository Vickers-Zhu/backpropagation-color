import React, { useState } from "react";
import "./InputBlock.css";

const InputBlock = ({ minRange, maxRange }) => {
  const [inputContent, setInputContent] = useState("");

  const handleInputChange = (event) => {
    const newContent = event.target.value;
    setInputContent(newContent);
  };

  return (
    <div className="input-block">
      <input
        type="number"
        min={minRange}
        max={maxRange}
        value={inputContent}
        onChange={handleInputChange}
        placeholder="Enter text..."
      />
    </div>
  );
};

export default InputBlock;
