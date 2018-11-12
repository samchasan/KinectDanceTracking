// var kinectron = null;

// RIGHT
var rightHandX;
var rightHandY;
var rightElbowX;
var rightElbowY;
var rightShoulderX;
var rightShoulderY;
var leftHandX;
var leftHandY;
var leftElbowX;
var leftElbowY;
var leftShoulderX;
var leftShoulderY;
var xNeck;
var yNeck;
var xHead
var yHead
var xSpineShoulder;
var ySpineShoulder;
var mxHip;
var myHip;
var spineX;
var spineY;
var lxHip;
var lyHip;
var rxHip;
var ryHip;
var lxAnkle;
var lyAnkle;
var rxAnkle;
var ryAnkle;
var lkneeX
var lkneeY
var rkneeX
var rkneeY

// function trackBody(body) {
//
//   console.log("intrackbody")
//   // Hands
//   var rHandX = body.joints[kinectron.HANDRIGHT].depthX;
//   rightHandX = map(rHandX, 0, 1, 0, width);
//   var rHandY = body.joints[kinectron.HANDRIGHT].depthY;
//   rightHandY = map(rHandY, 0, 1, 0, height);
//   var lHandX = body.joints[kinectron.HANDLEFT].depthX;
//   leftHandX = map(lHandX, 0, 1, 0, width);
//   var lHandY = body.joints[kinectron.HANDLEFT].depthY;
//   leftHandY = map(lHandY, 0, 1, 0, height);
//
//   console.log(leftHandX + ', ' + leftHandY + '; ' rightHandX + ', ' + rightHandY)
//
//   // Elbows
//   var rElbowX = body.joints[kinectron.ELBOWRIGHT].depthX;
//   rightElbowX = map(rElbowX, 0, 1, 0, width);
//   var rElbowY = body.joints[kinectron.ELBOWRIGHT].depthY;
//   rightElbowY = map(rElbowY, 0, 1, 0, height);
//   var lElbowX = body.joints[kinectron.ELBOWLEFT].depthX;
//   leftElbowX = map(lElbowX, 0, 1, 0, width);
//   var lElbowY = body.joints[kinectron.ELBOWLEFT].depthY;
//   leftElbowY = map(lElbowY, 0, 1, 0, height);
//
  // // Shoulders
  // var rShoulderX = body.joints[kinectron.SHOULDERRIGHT].depthX;
  // rightShoulderX = map(rShoulderX, 0, 1, 0, width);
  // var rShoulderY = body.joints[kinectron.SHOULDERRIGHT].depthY;
  // rightShoulderY = map(rShoulderY, 0, 1, 0, height);
  // var lShoulderX = body.joints[kinectron.SHOULDERLEFT].depthX;
  // leftShoulderX = map(lShoulderX, 0, 1, 0, width);
  // var lShoulderY = body.joints[kinectron.SHOULDERLEFT].depthY;
  // leftShoulderY = map(lShoulderY, 0, 1, 0, height);
  //
  // // CENTER
  // var neckX = body.joints[kinectron.NECK].depthX;
  // xNeck = map(neckX, 0, 1, 0, width);
  // var neckY = body.joints[kinectron.NECK].depthY;
  // yNeck = map(neckY, 0, 1, 0, height);
  // var headX = body.joints[kinectron.HEAD].depthX;
  // xHead = map(headX, 0, 1, 0, width);
  // var headY = body.joints[kinectron.HEAD].depthY;
  // yHead = map(headY, 0, 1, 0, height);
  // var spineShoulderX = body.joints[kinectron.SPINESHOULDER].depthX;
  // xSpineShoulder = map(spineShoulderX, 0, 1, 0, width);
  // var spineShoulderY = body.joints[kinectron.SPINESHOULDER].depthY;
  // ySpineShoulder = map(spineShoulderY, 0, 1, 0, height);
  //
  // // Hips
  // var mHipX = body.joints[kinectron.SPINEBASE].depthX;
  // mxHip = map(mHipX, 0, 1, 0, width);
  // var mHipY = body.joints[kinectron.SPINEBASE].depthY;
  // myHip = map(mHipY, 0, 1, 0, height);
  // var rHipX = body.joints[kinectron.HIPRIGHT].depthX;
  // rxHip = map(rHipX, 0, 1, 0, width);
  // var rHipY = body.joints[kinectron.HIPRIGHT].depthY;
  // ryHip = map(rHipY, 0, 1, 0, height);
  // var lHipX = body.joints[kinectron.HIPLEFT].depthX;
  // lxHip = map(lHipX, 0, 1, 0, width);
  // var lHipY = body.joints[kinectron.HIPLEFT].depthY;
  // lyHip = map(lHipY, 0, 1, 0, height);
  //
  // // Spine
  // var sPineX = body.joints[kinectron.SPINEMID].depthX;
  // spineX = map(sPineX, 0, 1, 0, width);
  // var sPineY = body.joints[kinectron.SPINEMID].depthY;
  // spineY = map(sPineY, 0, 1, 0, height);
  //
  // // Knees
  // var rKneeX = body.joints[kinectron.KNEERIGHT].depthX;
  // rkneeX = map(rKneeX, 0, 1, 0, width);
  // var rKneeY = body.joints[kinectron.KNEERIGHT].depthY;
  // rkneeY = map(rKneeY, 0, 1, 0, height);
  // var lKneeX = body.joints[kinectron.KNEELEFT].depthX;
  // lkneeX = map(lKneeX, 0, 1, 0, width);
  // var lKneeY = body.joints[kinectron.KNEELEFT].depthY;
  // lkneeY = map(lKneeY, 0, 1, 0, height);

  // Ankles
  // var lAnkleX = body.joints[kinectron.ANKLELEFT].depthX;
  // lxAnkle = map(lAnkleX, 0, 1, 0, width);
  // var lAnkleY = body.joints[kinectron.ANKLELEFT].depthY;
  // lyAnkle = map(lAnkleY, 0, 1, 0, height);
  // var rAnkleX = body.joints[kinectron.ANKLERIGHT].depthX;
  // rxAnkle = map(rAnkleX, 0, 1, 0, width);
  // var rAnkleY = body.joints[kinectron.ANKLERIGHT].depthY;
  // ryAnkle = map(rAnkleY, 0, 1, 0, height);

  // jointVals = [leftHand.jointVals,rightHand.jointVals,leftElbow.jointVals]

  // console.log(jointVals)
  // background(10,10,10)


    // poses();
    // drawBody();
    // makeObjs();
    // smoothEm();
    // fireworksDisplay();
