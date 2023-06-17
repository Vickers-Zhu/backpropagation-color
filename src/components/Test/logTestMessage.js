// Test.js
const colorSynthesisModel = require("../../algorithms/training");

export default function logTestMessage() {
  // Example usage
  // Predict colors using the trained model
  const input = [1, 0, 0, 0, 0, 1, 0, 1, 0];
  const predictedColor = colorSynthesisModel.predictColor(input);

  console.log("Input:", input);
  console.log("Predicted Color:", predictedColor);
  console.log("Hello, this is a test!");
}
