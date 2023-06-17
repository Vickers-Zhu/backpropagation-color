// Activation function - Sigmoid
function sigmoid(x) {
  return 1 / (1 + Math.exp(-x));
}

class NeuralNetwork {
  constructor(inputNodes, hiddenNodes, outputNodes) {
    // Set the number of nodes in each layer
    this.inputNodes = inputNodes;
    this.hiddenNodes = hiddenNodes;
    this.outputNodes = outputNodes;

    // Initialize the weights with random values
    this.weightsInputHidden = this.initializeWeights(hiddenNodes, inputNodes);
    this.weightsHiddenOutput = this.initializeWeights(outputNodes, hiddenNodes);

    this.hiddenLayerActivations = [];
  }

  initializeWeights(rows, cols) {
    const weights = [];
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < cols; j++) {
        row.push(Math.random() - 0.5); // Initialize with random values between -0.5 and 0.5
      }
      weights.push(row);
    }
    return weights;
  }
  forwardPass(inputData) {
    // Calculate the activations of the hidden layer
    this.hiddenLayerActivations = [];
    for (let i = 0; i < this.hiddenNodes; i++) {
      let activation = 0;
      for (let j = 0; j < this.inputNodes; j++) {
        activation += inputData[j] * this.weightsInputHidden[i][j];
      }
      this.hiddenLayerActivations.push(sigmoid(activation));
    }

    // Calculate the activations of the output layer
    const outputLayerActivations = [];
    for (let i = 0; i < this.outputNodes; i++) {
      let activation = 0;
      for (let j = 0; j < this.hiddenNodes; j++) {
        activation +=
          this.hiddenLayerActivations[j] * this.weightsHiddenOutput[i][j];
      }
      outputLayerActivations.push(sigmoid(activation));
    }

    return outputLayerActivations;
  }

  train(inputData, targetOutput, learningRate) {
    // Perform forward pass
    const outputActivations = this.forwardPass(inputData);
    // Calculate the errors in the output layer
    const outputErrors = outputActivations.map(
      (outputActivation, index) =>
        outputActivation *
        (1 - outputActivation) *
        (targetOutput[index] - outputActivation)
    );

    // Calculate the errors in the hidden layer
    const hiddenErrors = [];
    for (let i = 0; i < this.hiddenNodes; i++) {
      let error = 0;
      for (let j = 0; j < this.outputNodes; j++) {
        error += outputErrors[j] * this.weightsHiddenOutput[j][i];
      }
      const hiddenActivation = this.hiddenLayerActivations[i];
      hiddenErrors.push(hiddenActivation * (1 - hiddenActivation) * error);
    }

    // Update the weights between the hidden and output layers
    for (let i = 0; i < this.outputNodes; i++) {
      for (let j = 0; j < this.hiddenNodes; j++) {
        this.weightsHiddenOutput[i][j] +=
          learningRate * outputErrors[i] * this.hiddenLayerActivations[j];
      }
    }

    // Update the weights between the input and hidden layers
    for (let i = 0; i < this.hiddenNodes; i++) {
      for (let j = 0; j < this.inputNodes; j++) {
        this.weightsInputHidden[i][j] +=
          learningRate * hiddenErrors[i] * inputData[j];
      }
    }
  }
}

module.exports = NeuralNetwork;
