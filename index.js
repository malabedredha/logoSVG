const { Circle, Triangle, Square } = require("./lib/shapes");
const fs = require("fs");
const SVG = require("./lib/svg");
const { writeFile } = require("fs");

const userResponses = await inquirer.prompt([
  {
    type: "list",
    name: "shape",
    message: "choose a shape:",
    choices: ["circle", "triangle", "square"],
  },
  {
    type: "input",
    name: "fill",
    message: "What color do you want it to be"
  },
  {
    type: "input",
    name: "text",
    message: "What text do you want inside of your shape? (Must be between 1-3 characters)",
    validate: (input) => {
      if (input.length > 3) {
        return "(must be between 1-3 characters";
      }
      return true;
    },
  },
 