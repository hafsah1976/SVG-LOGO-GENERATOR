const inquirer = require("inquirer");
const fs = require("fs");
// const shapes = require("./lib/shapes");
const colours = require("./lib/colours");
const { Triangle, Square, Circle } = require("./lib/shapes");

function writeToFile(fileName, answer) {
  let svgData = "";
  let shapeInput = "";

  svgData = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
  svgData += "<g>";
  svgData += `${answer.shape}`;

  if (answer.shape === "Triangle") {
    shapeInput = new Triangle();
    svgData += `<polygon points="150, 18 244, 182 56, 182" fill="${answer.shapeColor}"/>`;
  } else if (answer.shape === "Square") {
    shapeInput = new Square();
    svgData += `<rect x="70" y="37" width="160" height="160" fill="${answer.shapeColor}"/>`;
  } else if (answer.shape === "Circle") {
    shapeInput = new Circle();
    svgData += `<circle cx="150" cy="115" r="80" pathLength="10" fill="${answer.shapeColor}"/>`;
  }

  svgData += `<text x="150" y="130" text-anchor="middle" font-="middle" font-size="35" fill="${answer.textColor}">${answer.text}</text>`;
  svgData += "</g>";
  svgData += "</svg>";

  fs.writeFile(fileName, svgData, (err) => {
    err ? console.log(err) : console.log("Generated logo.svg");
  });
}

function userInput() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "text",
        message: "Please Enter 3 Characters of the logo you would like to create:",
        validate: (input) => input.length <= 3,
      },
      {
        type: "input",
        name: "textColor",
        message: "Please enter a COLOR for Logo TEXT, e.g. lightpink or #ffb6c1:",
        // validate: (input) => {
        //   // check the input is valid css color name
        //   var COLOR =input;
        //   COLOR=colours.filter(input.toLowerCase());
        //   // check the input to validate hexadecimal code
        //   const HEXCODE = /^#[0-9A-F]{6}$/i.test(input);
        //   return COLOR || HEXCODE;
        // },
      },
      {
        type: "list",
        name: "shape",
        message: "Please select the SHAPE of your logo:",
        choices: ["Triangle", "Square", "Circle"],
        validate: (input) => input.length > 0,
      },
      {
        type: "input",
        name: "shapeColor",
        message: "Please enter the COLOR of th SHAPE of your logo, e.g. lightpink or #ffb6c1:",
        // validate: (input) => {
        //   // check the input is valid css color name
        //   const COLOR = colours.includes(input.toLowerCase());
        //   // check the input to validate hexadecimal code
        //   const HEXCODE = /^#[0-9A-F]{6}$/i.test(input);
        //   return COLOR || HEXCODE;
        // },
      },
    ])
    .then((answer) => {
      if (answer.text.length > 3) {
        console.log("Please enter 3 characters Only.");
        userInput();
      } else if (answer.shape.length === 0) {
        console.log("Please select at least one shape.");
        userInput();
      } else {
        writeToFile("logo.svg", answer);
      }
    });
}
userInput();//calling function