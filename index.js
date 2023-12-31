const inquirer = require("inquirer");
const fs = require("fs");
const { lowercaseColours } = require("./lib/colours");
const { Triangle, Square, Circle, SquarewithBR } = require("./lib/shapes");

function userInput() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "text",
        message:
          "Please Enter 3 Characters of the logo you would like to create: ",
        validate: (input) => {
          if (input.length == 3) {
            return true;
          } else if (input.length < 3) {
            console.log("\n Please enter at least 3 characters.");
          } else {
            return console.log("\n You cannot enter more than 3 characters.");
          }
        },
      },
      {
        type: "list",
        name: "textColorChoice",
        message: "Please choose a color format for the TEXT you have provided: ",
        choices: ["Color Names", "Hexadecimal Codes"],
      },
      {
        type: "input",
        name: "textColor",
        message: "Please enter a color for the TEXT you have provided: ",
        when: (answer) => {
          if (answer.textColorChoice === "Color Names") {
            return true;
          }
          return false;
        },
        validate: (answer) => {
          let input = answer.toLowerCase();
          for (
            var i = 0, arrayLength = lowercaseColours.length;
            i < arrayLength;
            i++
          ) {
            if (input.indexOf(lowercaseColours[i]) != -1) {
              return true;
            }
          }
          return console.log("\n Please enter a valid color name.");
        },
      },
      {
        type: "input",
        name: "textColor",
        message:
          "Please enter a hexadecimal code for the TEXT you have provided, e.g #000000: ",
        when: (answer) => {
          if (answer.textColorChoice === "Hexadecimal Codes") {
            return true;
          }
          return false;
        },
        validate: (answer) => {
          let isValidHexColor = answer;
          if ((isValidHexColor = /^#[0-9A-F]{6}$/i.test(answer))) {
            return true;
          }
          return console.log("\n Please enter a valid hexadecimal code.");
        },
      },
      {
        type: "list",
        name: "shape",
        message: "Please select a SHAPE for your logo:",
        choices: ["Triangle", "Square", "Circle", "Round cornered Square"],
        validate: (input) => input.length > 0,
      },

      {
        type: "list",
        name: "shapeColorFormat",
        message:
          "Please choose a color format for the SHAPE you have selected:",
        choices: ["Color Names", "Hexadecimal Codes"],
      },
      //validate shapecolorformat
      {
        type: "input",
        name: "shapeColor",
        message: "Enter a color to fill in the SHAPE: ",
        when: (answer) => {
          if (answer.shapeColorFormat === "Color Names") {
            return true;
          }
          return false;
        },
        validate: (answer) => {
          let input = answer.toLowerCase();
          for (
            var i = 0, arrayLength = lowercaseColours.length;
            i < arrayLength;
            i++
          ) {
            if (input.indexOf(lowercaseColours[i] != -1)) {
              return true;
            }
          }
          return "\n Please enter a valid color name.";
        },
      },
      {
        type: "input",
        name: "shapeColor",
        message:
          "Please enter a hexadecimal code to fill the SHAPE, e.g. #000000: ",
        when: (input) => {
          if (input.shapeColorFormat === "Hexadecimal Codes") {
            return true;
          }
          return false;
        },
        validate: (input) => {
          let isValidHexColor = input;
          if ((isValidHexColor = /^#[0-9A-F]{6}$/i.test(input))) {
            return true;
          }
          return console.log("\n Please enter a valid hexadecimal code.");
        },
      },
    ])
    .then((answer) => {
      writeToFile("logo.svg", answer);
    });
}

function writeToFile(fileName, answer) {
  // Taking from user
  let svgData = ""; //from the user input, data is accumulated in this variable as a string
  let shapeInput = "";

  svgData = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
  svgData += "<g>";
  svgData += `${answer.shape}`;

  switch (answer.shape) {
    case "Triangle":
      shapeInput = new Triangle();
      svgData += `<polygon points="150, 18 244, 182 56, 182" fill="${answer.shapeColor}"/>`;
      break;
    case "Square":
      shapeInput = new Square();
      svgData += `<rect x="70" y="37" width="160" height="160" fill="${answer.shapeColor}"/>`;
      break;
    case "Circle":
      shapeInput = new Circle();
      svgData += `<circle cx="150" cy="115" r="80" fill="${answer.shapeColor}"/>`;
      break;
    case "Round cornered Square":
      shapeInput = new SquarewithBR();
      svgData += `<rect x="70" y="37" rx="30" ry="30" width="160" height="160" fill="${answer.shapeColor}"/>`;
      break;
    default:
      // Handle unexpected shape input
      console.log("Please select a shape.");
      break;
  }

  // The text tag from HTML
  svgData += `<text x="150" y="130" text-anchor="middle" font-family="Arial, sans-serif" font-size="35" fill="${answer.textColor}">${answer.text}</text>`;
  svgData += "</g>";
  svgData += "</svg>";

  fs.writeFile(fileName, svgData, (err) => {
    err ? console.log(err) : console.log("Generated logo.svg");
  });
}

userInput(); //calling function
