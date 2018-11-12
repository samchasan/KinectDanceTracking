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

let arr = 230
let gee = 200
let bee = 0;
let buffer = 30

function poses (){

textSize(100)

let tPose = teePose()
let touchdown = touchDown()
let rockstar = rockStar()
let noKid = true

const w = width/2
const h = height/4

if (touchdown == true) {
  text("TOUCHDOWN!",w,h)
  if (noKid){
  touchdownGIF_create = createImg("touchdownbaby.gif")
  touchdownGIF_create.position((width/2)-140,(height/2)-160)
  console.log()
  noKid = false
}
} else {
  console.log("trying to remove")
  noKid = true
}

if (tPose == true ) {
  text("T-POSE!",w,h)
}
if (rockstar == true ) {
  text("ROCKSTAR!",w,h)
}

}


function rockStar(){
  if (leftElbowY < yHead && leftHandY-50 < leftElbowY) {
    if (rightHandY > lyHip){
      return true
    }
  }
  if (rightElbowY < yHead && rightHandY-50 < rightElbowY) {
    if (leftHandY > ryHip){
      return true
    }
  } else {
    return false
  }
}


function touchDown(){
  const yHands = (leftHandY + rightHandY) / 2
  const xLeft = abs(leftElbowX - leftHandX)
  const xRight = abs(rightElbowX - rightHandX)

  const upperLimY = yHands + buffer
  const lowerLimY = yHands - buffer

  if (yHands < yHead){
    if (xLeft < 30 && xRight < 30){
      return true
    } else {
      return false
    }
  }
}




function teePose (){
  // is there a mean function?
  const yLevel = (leftShoulderY + rightShoulderY) / 2
  const yHands = (leftHandY + rightHandY) / 2
  const upperLimY = yLevel + buffer
  const lowerLimY = yLevel - buffer
  const rDiff = round(abs(rightHandY-rightShoulderY))
  const lDiff = round(abs(leftHandY-leftShoulderY))

if(lDiff < 30 && rDiff < 30){
  if (yHands < upperLimY && yHands > lowerLimY ){
    arr = 100
    gee = 255
    bee = 100

    const maxDistanceL = dist(leftHandX,leftHandY,leftElbowX,leftElbowY) + dist(leftShoulderX,leftShoulderY,leftElbowX,leftElbowY)
    const currentDistanceL = dist(leftHandX,leftHandY,leftShoulderX,leftShoulderY)
    const upperL = maxDistanceL + buffer
    const lowerL = maxDistanceL - buffer

    const maxDistanceR = dist(rightHandX,rightHandY,rightElbowX,rightElbowY) + dist(rightShoulderX,rightShoulderY,rightElbowX,rightElbowY)
    const currentDistanceR = dist(rightHandX,rightHandY,rightShoulderX,rightShoulderY)
    const upperR = maxDistanceR + buffer
    const lowerR = maxDistanceR - buffer

    if(currentDistanceL < upperL && currentDistanceL > lowerL){

      if(currentDistanceR < upperR && currentDistanceR > lowerR){

      arr = 0
      gee = 100
      bee = 255
      return true
    }
  }
} else {
    gee = 0
    bee = 0
    return false
  }
}
}
