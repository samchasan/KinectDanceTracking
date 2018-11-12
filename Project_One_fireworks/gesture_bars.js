
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

      const reduce = -3
      const grow = 8

      let xMapped = map(this.xAvg,0,50,reduce,grow)
      let yMapped = map(this.yAvg,0,50,reduce,grow)


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

      let saturationX =  map(this.xHeight,0,720,0,100)
      let saturationY = map(this.yHeight,0,720,0,100)

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
