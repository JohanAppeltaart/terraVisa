function setup() {
  // createCanvas(windowWidth, windowHeight);
  createCanvas(windowWidth-40, 300);
  angleMode(DEGREES);
  strokeWeight(5);
  noFill();
  stroke(32, 8, 64);
  describe(
    'Users can click on the screen and drag to adjust their perspective in 3D space. The space contains a sphere of dark purple cubes on a light pink background.'
  );

  colors = [
    color(255, 0, 0),
    color(0, 255, 0),
    color(0, 0, 255),
    color(255, 255, 0)
  ];
}

function draw() {
  loadPixels();
  // let randomval = 1
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let randomval = random([0,0,0,0,0,1])
      // let randomval = [0,0,0,0,0,1][(y%6 * x%6 )/36]
      // console.log(randomval)
      if (randomval){
        set(x, y, colors[Math.round((x + y) / (mouseX-0)) % 4]);
      }
      else
      {
        set(x, y, colors[Math.round((x * y) / (mouseY-0)) % 4]);
      }
    }
  }
  updatePixels();
}