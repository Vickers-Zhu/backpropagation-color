// Define the color mapping for input and output colors

const colorMapping = {
  red: [1, 0, 0],
  blue: [0, 1, 0],
  green: [0, 0, 1],
  "sky blue": [0, 0, 0.5],
  yellow: [1, 1, 0],
  "red-purple": [0.5, 0, 0.5],
  white: [1, 1, 1],
};

// Function to convert input color string to numerical code
export function convertInputColorToCode(color) {
  return colorMapping[color];
}

// Function to convert output color string to numerical code
export function convertOutputColorToCode(color) {
  return colorMapping[color];
}
