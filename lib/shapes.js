// Shape is the parent class that we will use to extend to child classes
class Shape {
  constructor(text,textColor,shapeColor) {
    // Initialize properties of the shape
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;

  }
}

// Triangle class extends Shape
class Triangle extends Shape {
  constructor(text, textColor,shapeColor) {
    // Call the parent class constructor using super
    super(text, textColor,shapeColor);
  }

  render() {
    // Returns SVG polygon with user input for Triangle
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/><text x="100" y="185" font-size="45" font-family="Arial, sans-serif" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    ;
  }
}

// Square class extends Shape
class Square extends Shape {
  constructor(text, textColor,shapeColor) {
    super(text, textColor,shapeColor);
  }

  render() {
    // Returns SVG rectangle with user input for Square
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="50" fill="${this.shapeColor}"/><text x="100" y="185" font-size="45" font-family="Arial, sans-serif" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    ;
  }
}

// Circle class extends Shape
class Circle extends Shape {
  constructor(text, textColor,shapeColor) {
    super(text, textColor,shapeColor);
  }

  render() {
    // Returns SVG circle with user input for Circle
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="115" r="80" fill="${this.shapeColor}"/><text x="100" y="185" font-size="45" font-family="Arial, sans-serif" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    ;
  }
}

// Square with round corners or border radius class extends Shape
class SquarewithBR extends Shape {
  constructor(text, textColor,shapeColor) {
    super(text, textColor,shapeColor);
  }

  render() {
    // Returns SVG rounded rectangle with user input for Square with Rounded Corners
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="50" rx="30" ry="30" fill="${this.shapeColor}"/><text x="100" y="185" font-size="45" font-family="Arial, sans-serif" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    ;
  }
}

// Export the classes
module.exports = { Triangle, Square, Circle, SquarewithBR };