let xDisplace = 1;
let yDisplace = 0; //4
let nDots = 60; //70
let nLines = 20; //10
let coupling = 0;
let spaceWidth = 2;
let globalGapProbability = 0.2; // Adjust this value for gap prevalence
let lineWidth = 0.5;
let initialLineWidth = 0.5;

function setup() {
  createCanvas(300, 500);
  initialLineWidth = lineWidth;
}

function draw() {
  background(255);

  for (let i = 2; i < nLines; i++) {
    let y = map(i, 0, nLines - 1, 0, height - 50);

    beginShape();

    for (let j = 0; j < nDots; j++) {
      let x = map(j, 0, nDots - 1, 10, width - 10);
      let xDelta = random(-xDisplace, xDisplace);
      let yDelta = (0.3 - coupling) * random(-yDisplace, yDisplace); //1

      yDelta -= coupling * xDelta * (yDisplace / xDisplace);

      if (random() < globalGapProbability) {
        // Introduce a gap
        endShape(); // End the current shape
        beginShape(); // Start a new shape
        move(x + xDelta, y + yDelta);
      } else {
        // Continue the line
        strokeWeight(map(j, 0, nDots - 1, initialLineWidth, lineWidth));
        curveVertex(x + xDelta, y + yDelta);
      }
    }

    endShape();
    noLoop();
  }
}

function move(x, y) {
  vertex(x, y);
}

function mousePressed() {
  xDisplace = mouseX / width * 100;
  yDisplace = mouseY / height * 100;
  redraw(); // Update the state and redraw
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
