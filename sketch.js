
var hr , min, sc ;
var mnAngle,hrAngle,scAngle;


function setup() {
  createCanvas(720, 400);
  noStroke();
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
    
    sc = second()
    scAngle = map(sc , 0 , 60 , 0, 360);
    angleMode(DEGREES); // Change the mode to DEGREES
    let e = atan2(mouseY - height / 2, mouseX - width / 2);
    
    push();
    rotate(scAngle);
    stroke("white");
    strokeWeight(3)
    line(0,0,60,0) // Larger rectangle is rotating in degrees
   
    pop();
    stroke("white")
    strokeWeight(7)
    noFill();
    arc(0,0, 260,260, 0, scAngle);


    hr = hour()
    hrAngle = map(hr%12 , 0 , 12 , 0, 360);
    angleMode(DEGREES); // Change the mode to DEGREES
    let a = atan2(mouseY - height / 2, mouseX - width / 2);
    
    push();
    rotate(hrAngle);
    stroke("yellow");
    strokeWeight(7)
    line(0,0,70,0) // Larger rectangle is rotating in degrees
    pop();
    stroke("yellow");
    
    noFill();
    arc(0,0, 300,300, 0, hrAngle);

    mn = minute()
    mnAngle = map(mn , 0 , 60 , 0, 360);
    angleMode(DEGREES); // Change the mode to DEGREES
    let b = atan2(mouseY - height / 2, mouseX - width / 2);
    
    push();
    rotate(mnAngle);
    stroke(255,0,0);
    strokeWeight(5)
    
    line(0,0,100,0) // Larger rectangle is rotating in degrees
    pop();
    stroke("red")
    noFill();
    arc(0, 0, 280,280, 0, mnAngle);
    

  drawSprites();
  }