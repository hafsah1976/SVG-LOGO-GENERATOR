// defining shape class
class Shape {
    constructor() {
      this.color = "";
    }
    // Shape class takes in setColor function
    setColor(inputColor) {
      this.inputColor = inputColor;
    }
  }

class Triangle extends Shape {
     render() {
      // Returns polygon with color input
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    //   220,10 300,210 170,250 123,234"
    }
  }
 
  
  // Square class
  class Square extends Shape {
    render() {

      return `<rect x="50" y="50" width="300" height="200" fill="${this.color}" />`;
    }
  }
  
class Circle extends Shape {
  
    render() {
      return `<circle cx="150" cy="115" r="80" fill="${this.color}"/>`;
    }
  }

module.exports={Triangle,Square,Circle};