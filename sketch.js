let xDisplace = 1;
let yDisplace = 0; //4
let nDots = 60; //70
let nLines = 20; //10
let coupling = 0;
let spaceWidth = 2;
let gapRandomness = 0;
let lineWidth = 0.5;
let initialLineWidth = 0.5;

function setup() {
  createCanvas(300, 500);
  initialLineWidth = lineWidth;
}

function draw() {
  background(255);

  for (let i = 2; i < nLines; i++) {
    let y = map(i, 0, nLines - 1, 0, height -50);
  
    beginShape();
    
  

   for (let j = 0; j < nDots; j++) {
      let x = map(j, 0, nDots - 1, 10, width - 10);
      let xDelta = random(-xDisplace, xDisplace);
      let yDelta = (0.3 - coupling) * random(-yDisplace, yDisplace); //1

      yDelta -= coupling * xDelta * (yDisplace / xDisplace);

      if (random() < gapRandomness && j / nDots < gapRandomness) {
        // Introduce a gap
        move(x + xDelta, y + yDelta);
      }       else {
        // Continue the line
        curveVertex(x + xDelta, y + yDelta);
      }
    }

    endShape();
    noLoop();
    
}
}

function mousePressed() {
  xDisplace = mouseX / width * 100;
  yDisplace = mouseY / height * 100;
  redraw(); // Update the state and redraw
}



function keyPressed() {
  if (key === 's') {
    saveCanvas('output', 'png');
  }
  
}