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

var kinectron = null;


function getClosestBodyIndex(bodies) {
    var closestZ = Number.MAX_VALUE;
    var closestBodyIndex = -1;

    for (var i = 0; i < bodies.length; i++) {
        if (bodies[i].tracked && bodies[i].joints[kinectron.SPINEMID].cameraZ < closestZ) {
            closestZ = bodies[i].joints[kinectron.SPINEMID].cameraZ;
            closestBodyIndex = i;
        }
    }
return closestBodyIndex;
}


function trackBody(bodies) {

  var closestBody = getClosestBodyIndex(bodies.body);
  if (closestBody < 0) return

  var body = bodies.body[closestBody]

    // Hands
    let rHandX = body.joints[kinectron.HANDRIGHT].depthX;
    rightHandX = map(rHandX, 0, 1, 0, width);
    let rHandY = body.joints[kinectron.HANDRIGHT].depthY;
    rightHandY = map(rHandY, 0, 1, 0, height);
    let lHandX = body.joints[kinectron.HANDLEFT].depthX;
    leftHandX = map(lHandX, 0, 1, 0, width);
    let lHandY = body.joints[kinectron.HANDLEFT].depthY;
    leftHandY = map(lHandY, 0, 1, 0, height);
    
    // Elbows
    let rElbowX = body.joints[kinectron.ELBOWRIGHT].depthX;
    rightElbowX = map(rElbowX, 0, 1, 0, width);
    let rElbowY = body.joints[kinectron.ELBOWRIGHT].depthY;
    rightElbowY = map(rElbowY, 0, 1, 0, height);
    let lElbowX = body.joints[kinectron.ELBOWLEFT].depthX;
    leftElbowX = map(lElbowX, 0, 1, 0, width);
    let lElbowY = body.joints[kinectron.ELBOWLEFT].depthY;
    leftElbowY = map(lElbowY, 0, 1, 0, height);

    // Shoulders
    let rShoulderX = body.joints[kinectron.SHOULDERRIGHT].depthX;
    rightShoulderX = map(rShoulderX, 0, 1, 0, width);
    let rShoulderY = body.joints[kinectron.SHOULDERRIGHT].depthY;
    rightShoulderY = map(rShoulderY, 0, 1, 0, height);
    let lShoulderX = body.joints[kinectron.SHOULDERLEFT].depthX;
    leftShoulderX = map(lShoulderX, 0, 1, 0, width);
    let lShoulderY = body.joints[kinectron.SHOULDERLEFT].depthY;
    leftShoulderY = map(lShoulderY, 0, 1, 0, height);

    // CENTER
    let neckX = body.joints[kinectron.NECK].depthX;
    xNeck = map(neckX, 0, 1, 0, width);
    let neckY = body.joints[kinectron.NECK].depthY;
    yNeck = map(neckY, 0, 1, 0, height);
    let headX = body.joints[kinectron.HEAD].depthX;
    xHead = map(headX, 0, 1, 0, width);
    let headY = body.joints[kinectron.HEAD].depthY;
    yHead = map(headY, 0, 1, 0, height);
    let spineShoulderX = body.joints[kinectron.SPINESHOULDER].depthX;
    xSpineShoulder = map(spineShoulderX, 0, 1, 0, width);
    let spineShoulderY = body.joints[kinectron.SPINESHOULDER].depthY;
    ySpineShoulder = map(spineShoulderY, 0, 1, 0, height);

    // Hips
    let mHipX = body.joints[kinectron.SPINEBASE].depthX;
    mxHip = map(mHipX, 0, 1, 0, width);
    let mHipY = body.joints[kinectron.SPINEBASE].depthY;
    myHip = map(mHipY, 0, 1, 0, height);
    let rHipX = body.joints[kinectron.HIPRIGHT].depthX;
    rxHip = map(rHipX, 0, 1, 0, width);
    let rHipY = body.joints[kinectron.HIPRIGHT].depthY;
    ryHip = map(rHipY, 0, 1, 0, height);
    let lHipX = body.joints[kinectron.HIPLEFT].depthX;
    lxHip = map(lHipX, 0, 1, 0, width);
    let lHipY = body.joints[kinectron.HIPLEFT].depthY;
    lyHip = map(lHipY, 0, 1, 0, height);

  drawThings()

}
