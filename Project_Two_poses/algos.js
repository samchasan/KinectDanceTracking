let arr = 230
let gee = 200
let bee = 0;
let buffer = 30

function poses (){
// Individual variables store true/false comparitors as functions
    let tPose = teePose()
    let touchdown = touchDown()
    let rockstar = rockStar()

    const w = width/2
    const h = height/4

// If function touchdown returns true, show the following
// and the same with the next poses

    if (touchdown == true) {
      image(bg,0,0)
      drawBody()
      image(touchdownHL,0,0)
      image(touchdownText,0,0)
      image(figures,0,0)

    }

    if (tPose == true ) {
      image(bg,0,0)
      drawBody()
      image(tposeHL,0,0)
      image(tposeText,0,0)
      image(figures,0,0)

    }
    if (rockstar == true ) {
      image(bg,0,0)
      image(figures,0,0)
      drawBody()
      image(rockstarHL,0,0)
      image(rockstarText,0,0)
      image(figures,0,0)

    }

}

// Rockstar looks to see a hand above the head and a hand below the waist
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

// touchdown looks for Hands above the head

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


// t-pose looks for hands out at shoulder height, at full length

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

// initiate objects to hold points
function makeObjs(){
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

// smooth points
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
  strokeWeight(10)
  stroke(200, 0, 255)
  line(rightHand.xpos, rightHand.ypos, rightElbow.xpos, rightElbow.ypos);
  line(rightShoulder.xpos, rightShoulder.ypos, rightElbow.xpos, rightElbow.ypos);
  line(rightShoulder.xpos, rightShoulder.ypos, spineShoulder.xpos, spineShoulder.ypos);
  line(leftShoulder.xpos, leftShoulder.ypos, spineShoulder.xpos, spineShoulder.ypos);
  line(neck.xpos, neck.ypos, head.xpos, head.ypos);
  line(lHip.xpos, lHip.ypos, leftShoulder.xpos, leftShoulder.ypos);
  line(rHip.xpos, rHip.ypos, rightShoulder.xpos, rightShoulder.ypos);
  line(spineShoulder.xpos, spineShoulder.ypos, leftShoulder.xpos, leftShoulder.ypos);
  line(leftHand.xpos, leftHand.ypos, leftElbow.xpos, leftElbow.ypos);
  line(leftShoulder.xpos, leftShoulder.ypos, leftElbow.xpos, leftElbow.ypos);
  line(lHip.xpos, lHip.ypos, mHip.xpos, mHip.ypos);
  line(mHip.xpos, mHip.ypos, rHip.xpos, rHip.ypos);
  line(mHip.xpos, mHip.ypos, spine.xpos, spine.ypos);
  line(spine.xpos,spine.ypos, spineShoulder.xpos, spineShoulder.ypos);
  line(spineShoulder.xpos, spineShoulder.ypos, neck.xpos, neck.ypos);
  line(neck.xpos,neck.ypos,head.xpos,head.ypos);
  line(lKnee.xpos, lKnee.ypos, lHip.xpos, lHip.ypos);
  line(rKnee.xpos, rKnee.ypos, rHip.xpos, rHip.ypos);
  line(lKnee.xpos, lKnee.ypos, lAnkle.xpos, lAnkle.ypos);
  line(rKnee.xpos, rKnee.ypos, rAnkle.xpos, rAnkle.ypos);
  fill(100,20,100)
  ellipse(head.xpos,head.ypos,60,78)
  noStroke()
}
