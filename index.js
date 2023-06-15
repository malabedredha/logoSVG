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
  {
    type: "input",
    name: "text color",
    message: "text color(input a color code)",
  },
]);

let shape;

switch (userResponses.shape) {
  case "circle":
    shape = new Circle();
    break;
  case "triangle":
    shape = new Triangle();
    break;
  case "square":
    shape = new Square();
    break;
}

fs.writeFile("shape.svg", shape.markUp, function (err) {
  if (err) console.log(err);
});