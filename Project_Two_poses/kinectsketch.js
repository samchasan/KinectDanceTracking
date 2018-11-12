let touchdownGIF;

var touchdownGIF_load, touchdownGIF_create;


function preload(){
  // touchdownGIF_load = loadImage("touchdownbaby.gif")
}

function setup() {
  textAlign(CENTER)
  fill(255)
  textSize(100)
    createCanvas(1280,720)
    background(0)
    colorMode(HSB)
    stroke(255)
    strokeWeight(4)
    ellipse(10,100,10,30)
    console.log("loading")
    connectKinect();

}


function connectKinect() {
console.log("connecting")
    var address = {
        // var IPaddy = select('#IP').value()
        // console.log(IPaddy)
        host: '192.168.0.105',
        port: 9001,
        path: '/'
    };
    kinectron = new Kinectron('kinectron', address);
    console.log(kinectron)
    kinectron.makeConnection();
    console.log('connection')
    kinectron.startTrackedBodies(trackBody);
    console.log('started')

}

var kinectron = null;


function trackBody(body) {

  // Hands
  var rHandX = body.joints[kinectron.HANDRIGHT].depthX;
  rightHandX = map(rHandX, 0, 1, 0, width);
  var rHandY = body.joints[kinectron.HANDRIGHT].depthY;
  rightHandY = map(rHandY, 0, 1, 0, height);
  var lHandX = body.joints[kinectron.HANDLEFT].depthX;
  leftHandX = map(lHandX, 0, 1, 0, width);
  var lHandY = body.joints[kinectron.HANDLEFT].depthY;
  leftHandY = map(lHandY, 0, 1, 0, height);

  // Elbows
  var rElbowX = body.joints[kinectron.ELBOWRIGHT].depthX;
  rightElbowX = map(rElbowX, 0, 1, 0, width);


  var rElbowY = body.joints[kinectron.ELBOWRIGHT].depthY;
  rightElbowY = map(rElbowY, 0, 1, 0, height);


  var lElbowX = body.joints[kinectron.ELBOWLEFT].depthX;
  leftElbowX = map(lElbowX, 0, 1, 0, width);
  var lElbowY = body.joints[kinectron.ELBOWLEFT].depthY;
  leftElbowY = map(lElbowY, 0, 1, 0, height);

  // Shoulders
  var rShoulderX = body.joints[kinectron.SHOULDERRIGHT].depthX;
  rightShoulderX = map(rShoulderX, 0, 1, 0, width);
  var rShoulderY = body.joints[kinectron.SHOULDERRIGHT].depthY;
  rightShoulderY = map(rShoulderY, 0, 1, 0, height);
  var lShoulderX = body.joints[kinectron.SHOULDERLEFT].depthX;
  leftShoulderX = map(lShoulderX, 0, 1, 0, width);
  var lShoulderY = body.joints[kinectron.SHOULDERLEFT].depthY;
  leftShoulderY = map(lShoulderY, 0, 1, 0, height);


  // CENTER
  var neckX = body.joints[kinectron.NECK].depthX;
  xNeck = map(neckX, 0, 1, 0, width);
  var neckY = body.joints[kinectron.NECK].depthY;
  yNeck = map(neckY, 0, 1, 0, height);
  var headX = body.joints[kinectron.HEAD].depthX;
  xHead = map(headX, 0, 1, 0, width);
  var headY = body.joints[kinectron.HEAD].depthY;
  yHead = map(headY, 0, 1, 0, height);

  var rHipX = body.joints[kinectron.HIPRIGHT].depthX;
  rxHip = map(rHipX, 0, 1, 0, width);
  var rHipY = body.joints[kinectron.HIPRIGHT].depthY;
  ryHip = map(rHipY, 0, 1, 0, height);
  var lHipX = body.joints[kinectron.HIPLEFT].depthX;
  lxHip = map(lHipX, 0, 1, 0, width);
  var lHipY = body.joints[kinectron.HIPLEFT].depthY;
  lyHip = map(lHipY, 0, 1, 0, height);

  // const spineShoulderX = body.joints[kinectron.SPINESHOULDER].depthX;
  // xSpineShoulder = map(spineShoulderX, 0, 1, 0, width);
  // const spineShoulderY = body.joints[kinectron.SPINESHOULDER].depthY;
  // ySpineShoulder = map(spineShoulderY, 0, 1, 0, height);

  // console.log(xHead + ', ' + yHead)

background(225,30,10,20)
fireworksDisplay();
poses()
// touchdownGIF_create.scale(2,2)


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

}
