const inquirer = require("inquirer");//to get user input
const fs=require("fs");//to write and save the logo 
const path=require("path");//to get
const colours=require("./colours.js");//to match the valid colour names
const hexcolours=require("./hexolours.js");//to match the valid hexadecimal code of colours
const shapes=require("./lib/shapes.js");//importing shapes classes
//const{Triangle, Square, Circle}=require("./lib/shapes");
//creating canvas to render the shape of logo
const canvas= document.createElement('Canvas');
canvas.width = 300;
canvas.height = 200;

// Prompt the user for input
const answer = inquirer.prompt(
  {
    type: "input",
    name: 'text',
    message: "Please Enter 3 Characters of the logo you would like to create:",
    validate: (input) => input.length <= 3, // ensuring the user enters 3 characters 
  },
  {
  type: "input",
  name: 'textColour',
  message: "Please enter the TEXT color, no whitespace:",
  validate: (input) => {
  // check the input is valid css color name
  const userColor = colours.includes(input.toLowerCase());
  // check the input to validate hexadecimal code
  const userHexCode = /^#[0-9A-F]{6}$/i.test(input);
  return userColor || userHexCode; }
},
{
  type: "checkbox",
  name: 'shape',
  message: "Please select the SHAPE of your logo:",
  choices: ['Triangle', 'Circle', 'Square'],
},
{
  type: "input",
  name:"shapeColor",
  message: "Please select the SHAPE COLOR for your logo:",
  validate: (input) => {
  // check the input is valid css color name
  const userColor = colours.includes(input.toLowerCase());
  // check the input to validate hexadecimal code
  const userHexCode = /^#[0-9A-F]{6}$/i.test(input);
    return userColor || userHexCode;
  },
},
);

// Print the user's input to the console
console.log(answer);