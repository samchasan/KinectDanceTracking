let gravity;

let barsR
let barsL



function setup() {
  colorMode(HSB,255,100,100,10)
  textAlign(CENTER)

  const maxHeight = 720
  const minHeight = 20
  const startingPositionR = 640
  const startingPositionL = 0
  // console.log("startingPositionR: " + startingPositionR)

  barsR = new GestureBars(maxHeight,minHeight,startingPositionR,random(0,80),random(81,160))
  barsL = new GestureBars(maxHeight,minHeight,startingPositionL,random(161,220),random(221,255))

  // barsL = new GestureBars(720,20,0,width/4)
  // barsL = new GestureBars(720,20,width/2,width/4)
  // barsR.display()


  gravity = createVector(0,0.2);

  createCanvas(1280,720)
  textSize(40)
  background(0)
  stroke(140)
  strokeWeight(4)
  fill(100)
  // ellipse(10,100,10,30)
  console.log("loading")
  connectKinect()

}
