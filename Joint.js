let xposPrev = 0;
let yposPrev = 0;
let i = 1
let totalJoints = 17

// stores values for xpos and ypos of each body joint in an object that smooths out positioning

class Joint {

  constructor (xpos,ypos){
    this.xpos = xpos;
    this.ypos = ypos;
    this.pos = createVector(xpos,ypos);
}


  smoother(xpos,ypos){

    xpos = xpos;
    ypos = ypos;

    setInterval( function () {
    if (abs(xpos - xposPrev) > 50){
      xpos = xposPrev
    }
    else {
      xpos = xpos
    }
    xposPrev = xpos

    if (abs(ypos - yposPrev) > 50){
      ypos = yposPrev
    }
    else {
      ypos = ypos
    }
    yposPrev = ypos
  }, 40)

    this.update(xpos,ypos);
  }

  update(xpos,ypos){
    this.xpos = xpos
    this.ypos = ypos
    this.pos.x = xpos
    this.pos.y = ypos
    var index = floor(i)
    // this.jointVals[index] = this.pos
    this.show()
    i += 1/totalJoints
  }

    show(){
      fill(200,205,100)
      ellipse(this.xpos,this.ypos,20,20)

    }
}
