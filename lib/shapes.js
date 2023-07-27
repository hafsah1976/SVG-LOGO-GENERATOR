class Triangle {
    constructor(x, y, side, color){
this.x=x;
this.y=y;
this.size=side;
this.color=color;
    }

    render() {
        const height = (Math.sqrt(3) / 2) * this.side;
        const path = `M ${this.x} ${this.y - height / 2} ` +
                     `L ${this.x - this.side / 2} ${this.y + height / 2} ` +
                     `L ${this.x + this.side / 2} ${this.y + height / 2} ` +
                     `Z`;
        const fill = this.color ? `fill="${this.color}"` : '';
        return `<path d="${path}" ${fill}/>`;
      }
  
}


// function renderTriangle(x, y, size, color) {
//     const ctx = document.getElementById("canvas").getContext("2d");
//     ctx.beginPath();
//     ctx.moveTo(x, y + size);
//     ctx.lineTo(x + size, y);
//     ctx.lineTo(x + size, y + size);
//     ctx.fillStyle = color;
//     ctx.fill();
//     ctx.closePath();
//   }
  
  // Create a triangle at position (100, 100) with size 50 and color red
  renderTriangle(100, 100, 50, "red");
  
  // Create a triangle at position (200, 200) with size 50 and color blue
  renderTriangle(200, 200, 50, "blue");