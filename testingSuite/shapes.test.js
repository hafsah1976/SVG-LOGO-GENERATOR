const { Triangle, Square, Circle, SquarewithBR } = require("../lib/shapes.js");

//testing triangle shape, text color and text
describe("Triangle", () => {
  it("output should match the user input, i.e. text, text color and shape", () => {
    const triangle = new Triangle("SVG", "blue", "white");
    expect(triangle.render()).toEqual(
`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="white"/><text x="100" y="185" font-size="45" font-family="Arial, sans-serif" text-anchor="middle" fill="blue">SVG</text></svg>`
    );
  });
});

//testing Square shape, text and text color 

describe("Square", () => {
  it("output should match the user input, i.e. text, text color and shape", () => {
    const square = new Square("SVG", "green", "white");
    expect(square.render()).toEqual(
`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="50" fill="white"/><text x="100" y="185" font-size="45" font-family="Arial, sans-serif" text-anchor="middle" fill="green">SVG</text></svg>`
    );
  });
});

//testing Circle shape, text and text color 

describe("Circle", () => {
  it("output should match the user input, i.e. text, text color and shape", () => {
    const circle = new Circle("SVG","green","white");
    expect(circle.render()).toEqual(
`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="115" r="80" fill="white"/><text x="100" y="185" font-size="45" font-family="Arial, sans-serif" text-anchor="middle" fill="green">SVG</text></svg>`
    );
  });
});

//testing , Round Cornered Square shape, text and text color 

describe("Round cornered Square", () => {
  it("output should match the user input, i.e. text, text color and shape", () => {
    const roundedSquare = new SquarewithBR("OOP","orange","red");
    expect(roundedSquare.render()).toEqual(
`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="50" rx="30" ry="30" fill="red"/><text x="100" y="185" font-size="45" font-family="Arial, sans-serif" text-anchor="middle" fill="orange">OOP</text></svg>`
    );
  });
});
