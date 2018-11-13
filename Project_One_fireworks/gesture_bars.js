// Object containing the bars and the math behind controlling their height and position

// set grow and reduce rate
const reduce = -4
const grow = 14

class GestureBars {
  constructor(biggestSize, smallestSize, startingPos, hu1, hu2){
    this.inputX = 10;
    this.inputY = 10;
    this.xVals = [];
    this.yVals = [];
    this.smallestSize = smallestSize;
    this.biggestSize = biggestSize;
    this.xHeight = smallestSize
    this.yHeight = smallestSize
    this.xPosPrev = 0;
    this.yPosPrev = 0;
    this.startingPos = startingPos
    this.rectWidth = width/4
    this.xtotal = 0;
    this.ytotal = 0;
    this.xAvg = 0
    this.yAvg = 0
    this.hu1 = hu1
    this.hu2 = hu2
  }

// takes x and y positions for updating
  update(inputX,inputY){
    if (inputX || inputY){
    this.inputX = inputX
    this.inputY = inputY
    let xDiff = this.inputX-this.xPosPrev
    let yDiff = this.inputY-this.yPosPrev

    let xDelta = abs(xDiff)
    let yDelta = abs(yDiff)

    this.xVals.push(xDelta)
    this.yVals.push(yDelta)

// store up 24 values at a time to add up and average out
      if(this.xVals.length >= 24){
        for(i = 0; i < this.xVals.length; i++){
          let value = this.xVals[i]
          this.xtotal = this.xtotal + value
        }
        this.xAvg = this.xtotal/40
        this.xVals = [];
        this.xtotal = 0
        }

        if(this.yVals.length >= 24){
          for(i = 0; i < this.yVals.length; i++){
            let value2 = this.yVals[i]
            this.ytotal = this.ytotal + value2
          }
          this.yAvg = this.ytotal/40
          this.yVals = [];
          this.ytotal = 0
          }

// map the avg val to grow and reduce rate
      let xMapped = map(this.xAvg,0,50,reduce,grow)
      let yMapped = map(this.yAvg,0,50,reduce,grow*2)

      this.yHeight += yMapped
      this.xHeight += xMapped

// set limits on size of bars
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
// reset previous positions to check for next loop

      this.xPosPrev = this.inputX
      this.yPosPrev = this.inputY

      }

// set lightness and power values for fill and text
      let lightnessX =  map(this.xHeight,0,720,30,100)
      let lightnessY = map(this.yHeight,0,720,30,100)

      let xPower = map(lightnessX,10,100,-3,100)
      let yPower = map(lightnessY,10,100,-3,100)

      this.display(this.xHeight, this.yHeight,lightnessX,lightnessY,xPower,yPower,this.startingPos, this.hu1, this.hu2)

  }

// Vals in parenthesis for display function are immediately above in this.display()
// This is not typically good practice but because the values are labeled above
// I figured in this instance it would be ok :)

  display(xh,yh,xl,yl,xp,yp,sp,hu1,hu2){

    let xpee = round(xp)
    let ypee = round(yp)

    let secondPos = sp + width/4

        fill(hu1,80,xl,8)
        rect(sp,height,width/4,-xh)
        fill(hu2,80,yl,8)
        rect(secondPos,height,width/4,-yh)

// translate text over to center in bars
        push()
        translate(160,0)
        fill(0)
        text("X Power: " + xpee,sp+2,height-22)
        text("Y Power: " + ypee,secondPos+2,height-22)
        fill(255)
        text("X Power: " + xpee,sp,height-20)
        text("Y Power: " + ypee,secondPos,height-20)
        pop()
    }

}
