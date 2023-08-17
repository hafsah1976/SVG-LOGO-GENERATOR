// Shape is the parent class that we will use to extend to child classes
class Shape {
  constructor(shapeColor, text, textColor) {
    // Initialize properties of the shape
    this.shapeColor = shapeColor;
    this.text = text;
    this.textColor = textColor;
  }
}

// Triangle class extends Shape
class Triangle extends Shape {
  constructor(shapeColor, text, textColor) {
    // Call the parent class constructor using super
    super(shapeColor, text, textColor);
  }

  render() {
    // Returns SVG polygon with user input for Triangle
    return `
      <svg version="1.1" 
          width="300" height="200"
          xmlns="http://www.w3.org/2000/svg">
          <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/>
          <text x="100" y="185" font-size="35" font-family="Arial, sans-serif" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>
    `;
  }
}

// Square class extends Shape
class Square extends Shape {
  constructor(shapeColor, text, textColor) {
    super(shapeColor, text, textColor);
  }

  render() {
    // Returns SVG rectangle with user input for Square
    return `
      <svg version="1.1" 
          width="300" height="200"
          xmlns="http://www.w3.org/2000/svg">
          <rect x="50" y="50" width="300" height="200" fill="${this.shapeColor}"/>
          <text x="100" y="185" font-size="35" font-family="Arial, sans-serif" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>
    `;
  }
}

// Circle class extends Shape
class Circle extends Shape {
  constructor(shapeColor, text, textColor) {
    super(shapeColor, text, textColor);
  }

  render() {
    // Returns SVG circle with user input for Circle
    return `
      <svg version="1.1" 
          width="300" height="200"
          xmlns="http://www.w3.org/2000/svg">
          <circle cx="150" cy="115" r="80" fill="${this.shapeColor}"/>
          <text x="100" y="185" font-size="35" font-family="Arial, sans-serif" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>
    `;
  }
}

// Square with round corners or border radius class extends Shape
class SquarewithBR extends Shape {
  constructor(shapeColor, text, textColor) {
    super(shapeColor, text, textColor);
  }

  render() {
    // Returns SVG rounded rectangle with user input for Square with Rounded Corners
    return `
      <svg version="1.1" 
          width="300" height="200"
          xmlns="http://www.w3.org/2000/svg">
          <rect x="60" y="10" rx="10" ry="10" fill="${this.shapeColor}"/>
          <text x="100" y="185" font-size="35" font-family="Arial, sans-serif" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>
    `;
  }
}

// Export the classes
module.exports = { Triangle, Square, Circle, SquarewithBR };