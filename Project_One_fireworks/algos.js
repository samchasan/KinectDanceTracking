
let arr = 230
let gee = 200
let bee = 0;


function smoothEm(){
  leftHand.smoother(leftHandX, leftHandY)
  rightHand.smoother(rightHandX, rightHandY)
  leftElbow.smoother(leftElbowX, leftElbowY)
  rightElbow.smoother(rightElbowX,rightElbowY)
  leftShoulder.smoother(leftShoulderX,leftShoulderY)
  rightShoulder.smoother(rightShoulderX,rightShoulderY)
  head.smoother(xHead, yHead)
  neck.smoother(xNeck,yNeck)
  spineShoulder.smoother(xSpineShoulder,ySpineShoulder)
  spine.smoother(spineX,spineY)
  lHip.smoother(lxHip, lyHip)
  mHip.smoother(mxHip,myHip)
  rHip.smoother(rxHip, ryHip)
  lAnkle.smoother(lxAnkle, lyAnkle)
  rAnkle.smoother(rxAnkle, ryAnkle)
  lKnee.smoother(lkneeX,lkneeY)
  rKnee.smoother(rkneeX, rkneeY)
}

function drawBody() {

    strokeWeight(5)
    stroke(255, 255, 255)
    line(rightHandX, rightHandY, rightElbowX, rightElbowY);
    line(rightShoulderX, rightShoulderY, rightElbowX, rightElbowY);
    line(rightShoulderX, rightShoulderY, xSpineShoulder, ySpineShoulder);
    line(xNeck, yNeck, leftShoulderX, leftShoulderY);
    line(xNeck, yNeck, rightShoulderX, rightShoulderY);
    line(lxHip, lyHip, leftShoulderX, leftShoulderY);
    line(rxHip, ryHip, rightShoulderX, rightShoulderY);
    line(xSpineShoulder, ySpineShoulder, leftShoulderX, leftShoulderY);
    line(leftHandX, leftHandY, leftElbowX, leftElbowY);
    line(leftShoulderX, leftShoulderY, leftElbowX, leftElbowY);
    line(lxHip, lyHip, mxHip, myHip);
    line(mxHip, myHip, rxHip, ryHip);
    line(mxHip, myHip, spineX, spineY);
    line(spineX,spineY, xSpineShoulder, ySpineShoulder);
    line(xSpineShoulder, ySpineShoulder, xNeck, yNeck);
    line(xNeck,yNeck,xHead,yHead);
    // line(lkneeX, lkneeY, lxHip, lyHip);
    // line(rkneeX, rkneeY, rxHip, ryHip);
    // line(lkneeX, lkneeY, lxAnkle, lyAnkle);
    // line(rkneeX, rkneeY, rxAnkle, ryAnkle);
    fill(arr,gee,bee)
    noStroke()
    ellipse(mxHip, myHip, 10, 10)
    ellipse(spineX, spineY, 10, 10)
    ellipse(xSpineShoulder,ySpineShoulder,10,10)
    ellipse(xHead,yHead,60,90)
    ellipse(rightHandX, rightHandY, 10, 10)
}

function makeObjs(){
  console.log("making objs")
  leftHand = new Joint("leftHand",leftHandX,leftHandY)
  rightHand = new Joint("rightHand",rightHandX,rightHandY)
  leftElbow = new Joint("leftElbow",leftElbowX, leftElbowY)
  rightElbow = new Joint("rightElbow",rightElbowX,rightElbowY)
  leftShoulder = new Joint("leftShoulder",leftShoulderX,leftShoulderY)
  rightShoulder = new Joint("rightShoulder",rightShoulderX,rightShoulderY)
  head = new Joint("Head",xHead, yHead)
  neck = new Joint("Neck",xNeck,yNeck)
  spineShoulder = new Joint("SpineShoulder",xSpineShoulder,ySpineShoulder)
  spine = new Joint("Spine",spineX,spineY)
  lHip = new Joint("leftHip",lxHip, lyHip)
  mHip = new Joint("MidHip",mxHip,myHip)
  rHip = new Joint("rightHip",rxHip, ryHip)
  lAnkle = new Joint("leftAnkle",lxAnkle, lyAnkle)
  rAnkle = new Joint("rightAnkle",rxAnkle, ryAnkle)
  lKnee = new Joint("leftKnee",lkneeX,lkneeY)
  rKnee = new Joint("rightKnee",rkneeX, rkneeY)
}

function CreateVectors(){
  leftHand = createVector(leftHandX,leftHandY)
  rightHand = createVector(rightHandX,rightHandY)
  leftElbow = createVector(leftElbowX, leftElbowY)
  rightElbow = createVector(rightElbowX,rightElbowY)
  leftShoulder = createVector(leftShoulderX,leftShoulderY)
  rightShoulder = createVector(rightShoulderX,rightShoulderY)
  head = createVector(xHead, yHead)
  neck = createVector(xNeck,yNeck)
  spineShoulder = createVector(xSpineShoulder,ySpineShoulder)
  spine = createVector(spineX,spineY)
  lHip = createVector(lxHip, lyHip)
  mHip = createVector(mxHip,myHip)
  rHip = createVector(rxHip, ryHip)
  lAnkle = createVector(lxAnkle, lyAnkle)
  rAnkle = createVector(rxAnkle, ryAnkle)
  lKnee = createVector(lkneeX,lkneeY)
  rKnee = createVector(rkneeX, rkneeY)
}

var fireworks = [];

function fireworksDisplay() {

  xpos = rightHandX
  xDifference = xpos-xposPrevious

    for (var i = fireworks.length - 1; i >= 0; i--) {
        fireworks[i].update();
        fireworks[i].show();
        let isDone = fireworks[i].done()

        if (isDone) {
            fireworks.splice(i, 1);
        }
    }
if (abs(xDifference) > 40){
  if (fireworks.length < 5){
  fireworks.push(new Firework(rightHandX, random(-3,3),random(-2,-5)))
  // console.log(fireworks.length)
} else {
  console.log( "too many fireworks")
}
  // console.log(xDiff)
}
xposPrevious = xpos

}
