// red: #F24440
// blue: #1785FB
// green: #73C86B

var value = 0;
var threshold = 30;
var col = 0;
var mCol = 0;
var lung = 0;
var col1;
var col2;


function setup() {
    createCanvas(windowWidth, windowHeight);

    angleMode(DEGREES);
    setShakeThreshold(threshold);

}

function draw() {
    background(mCol,mCol-100,mCol-100);
    noStroke(); 
    ellipse(width/2, height/2, lung*2);
    fill(255 - value);
    textFont("Proxima Nova");
    textAlign(CENTER); 
    textSize(10);
    text("Rotate me!", width / 2, height - 10)
}

function deviceShaken() {
   for (var i=0;i<30;i++){
       noStroke();
       fill(252, 233, 233);
       ellipse(random(width),random(height), 10);
   }
    textSize(40);
    textFont("Proxima Nova");
    textAlign(CENTER); 
    text("It's magic time!", width / 2, height / 2 + 30);

}

function deviceTurned() {
    col = rotationY;
    col = round(col*1000)/1000;
    mCol = map(col, -90, 90, 0, 255);
    
    lung = rotationX;
   
}