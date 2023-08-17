// shape is the parent class that we will use to extend to child classes
class Shape {
  constructor(shapeColor, text, textColor) {
      this.shapeColor = shapeColor;
      this.text = text;
      this.textColor = textColor;
  }
};

class Triangle extends Shape {
  constructor(shapeColor, text, textColor) {
    super(shapeColor, text, textColor);  };

     render() {
      // Returns polygon with user input
      return `
        <svg version="1.1" 
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/>
            <text x="100" y="185" font-size="35" font-family="Arial, sans-serif" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `
    };
};
 
  
  // Square class
  class Square extends Shape {
    constructor(shapeColor, text, textColor) {
      super(shapeColor, text, textColor);  };
  
    render() {
      return `<rect x="50" y="50" width="300" height="200" fill="${shapeColor}"/>
      <text x="100" y="185" font-size="35" font-family="Arial, sans-serif" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;

    };
  };
  
class Circle extends Shape {
  constructor (shapeColor, text, textColor){
    super(shapeColor, text, textColor)};
  
    render() {
      return ` <svg version="1.1" 
                width="300" height="200"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="150" cy="115" r="80" fill="${this.shapeColor}"/>
                <text x="100" y="185" font-size="35" font-family="Arial, sans-serif" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
            </svg>
            `
        };
    };

module.exports={Triangle,Square,Circle};