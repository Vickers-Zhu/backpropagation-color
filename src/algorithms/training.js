const NeuralNetwork = require("./neuralNetwork");

class ColorSynthesisModel {
  constructor() {
    // Create the neural network with appropriate input, hidden, and output nodes
    const inputNodes = 9;
    const hiddenNodes = 6;
    const outputNodes = 3;
    this.neuralNetwork = new NeuralNetwork(
      inputNodes,
      hiddenNodes,
      outputNodes
    );

    // Train the neural network
    this.train();
  }

  train() {
    // Define the input-output training patterns
    const trainingData = [
      { input: [1, 0, 0, 1, 0, 0, 1, 0, 0], output: [1, 0, 0] },
      { input: [0, 0, 1, 0, 0, 1, 0, 0, 1], output: [0, 0, 1] },
      { input: [0, 1, 0, 0, 1, 0, 0, 1, 0], output: [0, 1, 0] },
      { input: [1, 0, 0, 0, 0, 1, 1, 1, 1], output: [1, 0, 1] },
      { input: [0, 0, 1, 1, 0, 0, 1, 1, 1], output: [1, 0, 1] },
      { input: [1, 0, 0, 0, 1, 0, 1, 1, 1], output: [1, 1, 0] },
      { input: [0, 1, 0, 1, 0, 0, 1, 1, 1], output: [1, 1, 0] },
      { input: [0, 0, 1, 0, 1, 0, 1, 1, 1], output: [0, 1, 1] },
      { input: [0, 1, 0, 0, 0, 1, 1, 0, 0], output: [0, 1, 1] },
      { input: [1, 0, 0, 0, 1, 0, 0, 0, 1], output: [1, 1, 1] },
      { input: [0, 1, 0, 1, 0, 0, 0, 0, 1], output: [1, 1, 1] },
      { input: [1, 0, 0, 0, 0, 1, 0, 1, 0], output: [1, 1, 1] },
      { input: [0, 0, 1, 1, 0, 0, 0, 1, 0], output: [1, 1, 1] },
      { input: [0, 1, 0, 0, 0, 1, 1, 0, 0], output: [1, 1, 1] },
      { input: [0, 0, 1, 0, 1, 0, 1, 0, 0], output: [1, 1, 1] },
    ];

    const learningRate = 0.1;
    const epochs = 900;

    // Train the neural network
    for (let epoch = 0; epoch < epochs; epoch++) {
      for (const data of trainingData) {
        const { input, output } = data;
        console.log(
          "Confidence Rates: ",
          this.neuralNetwork.train(input, output, learningRate)
        );
      }
    }
  }

  predictColor(input) {
    const output = this.neuralNetwork.forwardPass(input);
    return output.map((value) => Math.round(value));
  }
}

// Create an instance of the ColorSynthesisModel
const colorSynthesisModel = new ColorSynthesisModel();

// Export the colorSynthesisModel instance
module.exports = colorSynthesisModel;
