let arr = 230
let gee = 200
let bee = 0;
let buffer = 30

function makeObjs() {
  leftHand = new Joint(leftHandX, leftHandY)
  rightHand = new Joint(rightHandX, rightHandY)
  leftElbow = new Joint(leftElbowX, leftElbowY)
  rightElbow = new Joint(rightElbowX, rightElbowY)
  leftShoulder = new Joint(leftShoulderX, leftShoulderY)
  rightShoulder = new Joint(rightShoulderX, rightShoulderY)
  head = new Joint(xHead, yHead)
  neck = new Joint(xNeck, yNeck)
  spineShoulder = new Joint(xSpineShoulder, ySpineShoulder)
  spine = new Joint(spineX, spineY)
  lHip = new Joint(lxHip, lyHip)
  mHip = new Joint(mxHip, myHip)
  rHip = new Joint(rxHip, ryHip)
  lAnkle = new Joint(lxAnkle, lyAnkle)
  rAnkle = new Joint(rxAnkle, ryAnkle)
  lKnee = new Joint(lkneeX, lkneeY)
  rKnee = new Joint(rkneeX, rkneeY)
}

// Smooth points

function smoothObjs() {
  leftHand.smoother(leftHandX, leftHandY)
  rightHand.smoother(rightHandX, rightHandY)
  leftElbow.smoother(leftElbowX, leftElbowY)
  rightElbow.smoother(rightElbowX, rightElbowY)
  leftShoulder.smoother(leftShoulderX, leftShoulderY)
  rightShoulder.smoother(rightShoulderX, rightShoulderY)
  head.smoother(xHead, yHead)
  neck.smoother(xNeck, yNeck)
  spineShoulder.smoother(xSpineShoulder, ySpineShoulder)
  spine.smoother(spineX, spineY)
  lHip.smoother(lxHip, lyHip)
  mHip.smoother(mxHip, myHip)
  rHip.smoother(rxHip, ryHip)
  lAnkle.smoother(lxAnkle, lyAnkle)
  rAnkle.smoother(rxAnkle, ryAnkle)
  lKnee.smoother(lkneeX, lkneeY)
  rKnee.smoother(rkneeX, rkneeY)
}


function drawBody() {
  // strokeWeight(10)
  // stroke(200, 0, 255)
  // line(rightHand.xpos, rightHand.ypos, rightElbow.xpos, rightElbow.ypos);
  // line(rightShoulder.xpos, rightShoulder.ypos, rightElbow.xpos, rightElbow.ypos);
  // line(rightShoulder.xpos, rightShoulder.ypos, spineShoulder.xpos, spineShoulder.ypos);
  // line(leftShoulder.xpos, leftShoulder.ypos, spineShoulder.xpos, spineShoulder.ypos);
  // line(neck.xpos, neck.ypos, head.xpos, head.ypos);
  // line(lHip.xpos, lHip.ypos, leftShoulder.xpos, leftShoulder.ypos);
  // line(rHip.xpos, rHip.ypos, rightShoulder.xpos, rightShoulder.ypos);
  // line(leftHand.xpos, leftHand.ypos, leftElbow.xpos, leftElbow.ypos);
  // line(leftShoulder.xpos, leftShoulder.ypos, leftElbow.xpos, leftElbow.ypos);
  // line(lHip.xpos, lHip.ypos, mHip.xpos, mHip.ypos);
  // line(mHip.xpos, mHip.ypos, rHip.xpos, rHip.ypos);
  // line(mHip.xpos, mHip.ypos, spine.xpos, spine.ypos);
  // line(spine.xpos, spine.ypos, spineShoulder.xpos, spineShoulder.ypos);
  // line(spineShoulder.xpos, spineShoulder.ypos, neck.xpos, neck.ypos);
  // line(neck.xpos, neck.ypos, head.xpos, head.ypos);
  // line(lKnee.xpos, lKnee.ypos, lHip.xpos, lHip.ypos);
  // line(rKnee.xpos, rKnee.ypos, rHip.xpos, rHip.ypos);
  // line(lKnee.xpos, lKnee.ypos, lAnkle.xpos, lAnkle.ypos);
  // line(rKnee.xpos, rKnee.ypos, rAnkle.xpos, rAnkle.ypos);
  // fill(100, 20, 100)
  // ellipse(head.xpos, head.ypos, 40, 40)
  // ellipse(head.xpos, head.ypos, 60, 72)
  // ellipse(head.xpos, head.ypos, 60, 72)

  // noStroke()
}


// various key methods for program control

$(document).keydown(function(e) {

  // S for Save --- save JSON file of position data to fs
  if (e.key == "s") {
    saveVals()
  }

  // R for Record --- set stop watch & begin cycle
  if (e.key == "r") {
    recordVals()
  }

  // T for sTop --- stop recording position data
  if (e.key == "t") {
    stopVals()
  }

  // C for Clear --- clear previous position values
  if (e.key == "c") {
    clearVals()
  }

})

function draw(){
  getVals()
}


function saveVals() {
  saveJSON(vals, 'positions.json');
}

function recordVals() {
  if (!song.isPlaying()) {
    startMillis = millis();
    song.play();
    // getVals()
    loop();
  }
}

function clearVals() {
  vals = [];
  loop();
  noLoop();
}

function stopVals() {
  if (song.isPlaying()) {
    song.stop()
    noLoop();
  }
}

function waveForm() {
  vertices = []
  let vertexPt = {}
  let waveform = fft.waveform();
  noFill();
  beginShape();
  stroke(120, 200, 255); // waveform is red
  strokeWeight(1);
  for (var i = 0; i < waveform.length; i += 10) {
    var x = map(i, 0, waveform.length, 0, width);
    var y = map(waveform[i], -1, 1, 0, height);
    vertex(x, y);
    vertexPt = {
      "xpos": x,
      "ypos": y
    }
    vertices.push(vertexPt)
  }
  endShape();

}

function showLevels() {
  var level = amplitude.getLevel();
  ampLvl = map(level, 0, 0.04, 0, 50);
  stroke(244, 140, 100)
  strokeWeight(2)
  noFill()
  ellipse(width / 2, height / 2, ampLvl, ampLvl);

}


function instructions() {
  noStroke()
  fill(150);
  text("Press buttons or keys to control", 10, 20);
  rect(11, 25, (vals.length / 10) + 2, 18)
}

function getVals() {

  // get timestamp of each frame recorded
  // to nearest whole millisecond
  let timeStamp = round(millis() - startMillis);
  let lh = leftHand

  // create position object for this frame
  input = {
    "position data": {
      "leftHand": {"x":leftHand.xpos,"y":leftHand.ypos},
      "rightHand": {"x":rightHand.xpos,"y":rightHand.ypos},
      "leftElbow": {"x":leftElbow.xpos,"y":leftElbow.ypos},
      "rightElbow": {"x":rightElbow.xpos,"y":rightElbow.ypos},
      "leftShoulder": {"x":leftShoulder.xpos,"y":leftShoulder.ypos},
      "rightShoulder": {"x":rightShoulder.xpos,"y":rightShoulder.ypos},
      "head": {"x":head.xpos,"y":head.ypos},
      "neck": {"x":neck.xpos,"y":neck.ypos},
      "spineShoulder": {"x":spineShoulder.xpos,"y":spineShoulder.ypos},
      "spine": {"x":spine.xpos,"y":spine.ypos},
      "leftHip": {"x":lHip.xpos,"y":lHip.ypos},
      "midHip": {"x":mHip.xpos,"y":mHip.ypos},
      "rightHip": {"x":rHip.xpos,"y":rHip.ypos},
      "leftAnkle": {"x":lAnkle.xpos,"y":lAnkle.ypos},
      "rightAnkle": {"x":rAnkle.xpos,"y":rAnkle.ypos},
      "leftKnee": {"x":lKnee.xpos,"y":lKnee.ypos},
      "rightKnee": {"x":rKnee.xpos,"y":rKnee.ypos}
    },
    "timeStamp": timeStamp,
    "amplitude": ampLvl
    // "frequency spectrum": vertices
  }

  vals.push(input)
}
