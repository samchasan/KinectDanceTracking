let kinectron = null;


// let xpos = 0
// let xposPrevious = 0
// let xDiff = 0


function connectKinect() {
console.log("connecting")
    let address = {
        // let IPaddy = select('#IP').value()
        // console.log(IPaddy)
        host: '192.168.0.105',
        port: 9001,
        path: '/'
    };
    kinectron = new Kinectron('kinectron', address);
    kinectron.makeConnection();
    kinectron.startTrackedBodies(trackBody);

}



function trackBody(body) {
  console.log('tracking')

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

  let rHipX = body.joints[kinectron.HIPRIGHT].depthX;
  rxHip = map(rHipX, 0, 1, 0, width);
  let rHipY = body.joints[kinectron.HIPRIGHT].depthY;
  ryHip = map(rHipY, 0, 1, 0, height);
  let lHipX = body.joints[kinectron.HIPLEFT].depthX;
  lxHip = map(lHipX, 0, 1, 0, width);
  let lHipY = body.joints[kinectron.HIPLEFT].depthY;
  lyHip = map(lHipY, 0, 1, 0, height);

  background(225,30,10,20)
  console.log('readytogo')
  barsR.update(rightHandX,rightHandY)
  barsL.update(leftHandX,leftHandY)
  fireworksDisplay();
  noStroke()
  fill(255,245,255)
  ellipse(rightHandX,rightHandY,40,40)
  ellipse(leftHandX,leftHandY,40,40)


}




class GestureBars {
  constructor(bs, ss, sp, hu1, hu2){
    this.inputX = 10;
    this.inputY = 10;
    this.xVals = [];
    this.yVals = [];
    this.smallestSize = ss;
    this.biggestSize = bs;
    this.xHeight = ss
    this.yHeight = ss
    this.xPosPrev = 0;
    this.yPosPrev = 0;
    this.startingPos = sp
    this.rectWidth = width/4
    this.xtotal = 0;
    this.ytotal = 0;
    this.xAvg = 0
    this.yAvg = 0
    this.hu1 = hu1
    this.hu2 = hu2
  }

  update(inputX,inputY){
    console.log(this.startingPos)
    if (inputX || inputY){
    this.inputX = inputX
    this.inputY = inputY
    let xDiff = this.inputX-this.xPosPrev
    let yDiff = this.inputY-this.yPosPrev

    let xDelta = abs(xDiff)
    let yDelta = abs(yDiff)

    this.xVals.push(xDelta)
    this.yVals.push(yDelta)
// console.log(this.xVals.length)
      if(this.xVals.length >= 40){
        for(i = 0; i < this.xVals.length; i++){
          let value = this.xVals[i]
          this.xtotal = this.xtotal + value
        }
        this.xAvg = this.xtotal/40
        this.xVals = [];
        this.xtotal = 0
        }


        if(this.yVals.length >= 40){
          for(i = 0; i < this.yVals.length; i++){
            let value2 = this.yVals[i]
            this.ytotal = this.ytotal + value2
          }
          this.yAvg = this.ytotal/40
          this.yVals = [];
          this.ytotal = 0
          }

      const reduce = -4
      const grow = 14

      let xMapped = map(this.xAvg,0,50,reduce,grow)
      let yMapped = map(this.yAvg,0,50,reduce,grow*2)


      // console.log(this.ytotal)


      this.yHeight += yMapped
      this.xHeight += xMapped

      if (this.xHeight <= this.smallestSize){
        this.xHeight = this.smallestSize;
      }
      if (this.yHeight <= this.smallestSize){
        this.yHeight = this.smallestSize;
      }
      if (this.xHeight >= this.biggestSize ){
        this.xHeight = this.biggestSize;
      }
      if (this.yHeight >= this.biggestSize){
        this.yHeight = this.biggestSize;
      }

      this.xPosPrev = this.inputX
      this.yPosPrev = this.inputY

      }

      let saturationX =  map(this.xHeight,0,720,0,80)
      let saturationY = map(this.yHeight,0,720,0,80)

      let xPower = floor(saturationX)
      let yPower = floor(saturationY)

      this.display(this.xHeight, this.yHeight,saturationX,saturationY,xPower,yPower,this.startingPos, this.hu1, this.hu2)

  }

  display(xh,yh,xs,ys,xp,yp,sp,hu1,hu2){

    let secondPos = sp + width/4

        fill(hu1,xs,80,8)
        rect(sp,height,width/4,-xh)
        fill(hu2,ys,80,8)
        rect(secondPos,height,width/4,-yh)

        push()
        translate(160,0)
        fill(0)
        text("X Power: " + xp,sp+2,102)
        text("Y Power: " + yp,secondPos+2,102)
        fill(255)
        text("X Power: " + xp,sp,100)
        text("Y Power: " + yp,secondPos,100)
        pop()
    }

}



let levelOne = false

function greeting() {
  if (levelOne == false){
  if (xHeight > 30){
    titleOne.html("Welcome!")
    setTimeout(function(){
      titleTwo.html("Now Jump!")
      levelOne = true
    },800)

  }
}
}

let levelTwo = false

function jumping(){
  if(levelTwo == false){
  if (yHeight > 40){
    titleOne.html("")
    titleTwo.html("Good Jump!")
    levelTwo = true
  }
  console.log("in Jumping")
}
}
