let touchdownGIF;
let touchdownGIF_load, touchdownGIF_create;
let bg
let touchdownHL
let rockstarHL
let tposeHL
let touchdownText
let rockstarText
let tposeText
let figures

function preload(){
  // touchdownGIF_load = loadImage("touchdownbaby.gif")
  bg = loadImage("imageAssets/background.jpg")
  touchdownHL = loadImage("imageAssets/hl_touchdown.png")
  rockstarHL = loadImage("imageAssets/hl_rockstar.png")
  tposeHL = loadImage("imageAssets/hl_tpose.png")
  touchdownText = loadImage("imageAssets/touchdown.png")
  rockstarText = loadImage("imageAssets/rockstar.png")
  tposeText = loadImage("imageAssets/tpose.png")
  figures = loadImage("imageAssets/titleandposes.png")
}

function setup() {
    fill(255)
    createCanvas(1920,1080)
    image(bg,0,0)
    image(figures,0,0)
    colorMode(HSB)
    stroke(255)
    strokeWeight(4)
    connectKinect();

}


function connectKinect() {
    var address = {
        // var IPaddy = select('#IP').value()
        // console.log(IPaddy)
        host: '10.17.81.138',
        port: 9001,
        path: '/'
    };
    kinectron = new Kinectron('kinectron', address);
    console.log(kinectron)
    kinectron.makeConnection();
    console.log('connection')
    // kinectron.startTrackedBodies(trackBody);
    // console.log('started')
    kinectron.startMultiFrame(["body","joints"],trackBody);
}



// called within trackbody

function drawThings(){
  background(0,0,0,1)
  image(bg,0,0)
  image(figures,0,0)
  makeObjs()
  smoothEm()
    poses()
    drawBody()
}
