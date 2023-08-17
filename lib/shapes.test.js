const {Triangle,Square,Circle, SquarewithBR}= require('./shapes.js');

//testing triangle shape, text color and text
describe('Triangle', () =>{
    it('output should match the user input, text, text color and shape', ()=>{
        const triangle = new Triangle("blue", "SVG", "white");
        expect(triangle.render()).toEqual(` <svg version="1.1" 
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <polygon points="150, 18 244, 182 56, 182" fill="white"/>
            <text x="100" y="185" font-size="45" font-family="Arial, sans-serif" text-anchor="middle" fill="blue">SVG</text>
        </svg>`
          );
    });
});

//testing Square shape, text color and text

describe('Square', () => {
    it('output should match the user input, i.e. text, text color and shape', () => {
        const square = new Square("green", "SVG", "white");
        expect(square.render()).toEqual(`
        <svg version="1.1" 
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="50" fill="white"/>
        <text x="100" y="185" font-size="45" font-family="Arial, sans-serif" text-anchor="middle" fill="green">SVG</text>
    </svg>
      `
        );
    });
});


describe('Circle', () => {
    it('output should match the user input, i.e. text, text color and shape', () => {
        const circle = new Circle("green", "SVG", "white");
        expect(circle.render()).toEqual(`
        <svg version="1.1" 
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="115" r="80" fill="green"/>
        <text x="100" y="185" font-size="45" font-family="Arial, sans-serif" text-anchor="middle" fill="white">SVG</text>
    </svg>`
    );
    });
});

describe('Round cornered Square', () => {
    it('output should match the user input, i.e. text, text color and shape', () => {
        const roundedSquare = new SquarewithBR("darkred", "OOP", "orange");
        expect(roundedSquare.render()).toEqual(`
        <svg version="1.1" 
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="50" rx="30" ry="30" fill="darkred"/>
        <text x="100" y="185" font-size="45" font-family="Arial, sans-serif" text-anchor="middle" fill="orange">OOP</text>
    </svg>`
        );
    });
});