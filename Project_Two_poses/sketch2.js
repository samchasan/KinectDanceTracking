var xpos = 0
var ypos = 0
var frame = 0

var table = new p5.Table()
var posVals = {}

function setup() {
    createCanvas(1280, 800);
    background(50);
    table.addColumn('x')
    table.addColumn('y')
    // submitPos()

    var button = select('#create');
    // button.mousePressed(createFile)
}

var index = 0

function draw(){
  // background(50)
  // xpos = mouseX
  // ypos = mouseY
  // frame = frameCount
  // console.log(frameCount)
  // fill(244,200,120)
  // ellipse(xpos,ypos, 20,20)
  // buildFile()

}

function submitPos(){
    setInterval( function () {
      table.addRow()
      table.set(index, 'x', xpos)
      table.set(index, 'y', ypos)
      index += 1
      // console.log(table)
    }, 1110)
}


function buildFile(){

  for (var i = 0 ; i < table.getRowCount(); i++){
    var row = table.getRow(i);
    posVals[row].xpos = row.get(0);
    posVals[row].ypos = row.get(1);
  }
}

function savefile(){
  save(posVals, 'movement_data.json');
}

//
// function submitPos(frame, xpos, ypos) {
//
//     // loadJSON('add/' + frame + '/' + xpos + '/' + ypos, finished);
//
//     // function finished(data){
//       // console.log(frame, xpos, ypos)
//       // drawData();
//     }
//    }
