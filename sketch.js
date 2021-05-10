var bg,bg2,bg3,bg3Img,form,system,code,security;
var ladoo,ladooImg;
var bheem2,bheem2Img;
var invisibleGround;
var ladooMountain,ladooMountainImg;
var score = 0;
var lc = 0;
var key,keyImg;
var gs=0;
var reset,resetImg;
var confetti,confettiImg

var congratsImg
function preload() {


bg = loadImage("bheem.png");
//load image for the treasure background
bg2 = loadImage("treasure.jpg");
keyImg = loadImage("key.png");
bg3Img = loadImage("bg3.jpg");
ladooImg = loadImage("ladoo.png");
bheem2Img = loadImage("bheem2.png");
ladooMountainImg = loadImage("ladooMountain.png");
confettiImg=loadImage("star.png")
congratsImg=loadImage("congrats.jpg")
resetImg=loadImage("reset.jpg")
}

function setup() {
createCanvas(1200,800);
security = new Security();
system = new System();
bheem2 = createSprite(600,600,10,10);
bheem2.addImage(bheem2Img);
bheem2.scale = 0.5;
bheem2.visible = false;


ladooMountain = createSprite(1167,757,10,10);
ladooMountain.addImage(ladooMountainImg);
ladooMountain.scale = 0.5;
ladooMountain.visible = false;

invisibleGround = createSprite(600,610,1200,10);
invisibleGround.shapeColor = "silver";
invisibleGround.visible = false;

reset = createSprite(600,400,50,50);
reset.addImage(resetImg);
reset.scale = 0.1;
reset.visible = false;

ladooGroup = new Group();
}

function draw() {
if(gs === 0) {
playlevel1();
}
if (gs===1){
playlevel2();
}
if (gs===2){
    Win();
    }
drawSprites();
}

function playlevel1(){
background(bg);

clues();
security.display(); 
textSize(30);
fill("red"); 
text("Score: " + score, 300, 50); 
if(score===3 && gs === 0) { 
clear();
background(bg2);
key = createSprite(750,510,50,50);
key.addImage(keyImg);
key.scale = 0.3

fill("black");
textSize(35); 
text("TREASURE LADOO UNLOCKED",550, 470);
if(mousePressedOver(key)){
gs = 1
}
}
}

function playlevel2(){
clear();
background(bg3Img);
textSize(1);
text("BHEEM THE LADOO EATER",600,200)
ladooMountain.visible = true;
invisibleGround.visible = false;
bheem2.visible = true;
key.visible = false;

ladoos();

textSize(20)
text("LadooCollected: " + lc, 800, 100)

if(keyDown(UP_ARROW)){
bheem2.velocityY = -5;
}

if(keyDown(LEFT_ARROW)){
bheem2.x = bheem2.x - 4;
}

if(keyDown(RIGHT_ARROW)){
bheem2.x = bheem2.x + 4;
}

bheem2.velocityY = bheem2.velocityY + 0.5;
bheem2.collide(invisibleGround);


for (var i = 0; i < ladooGroup.length; i++) {

if(ladooGroup.get(i).isTouching(bheem2)) {
//coinSound.play();
ladooGroup.get(i).remove();
lc = lc+ 100;
}
}
if(lc===1000){
    
    gs=2
}
}

function ladoos(){

if (frameCount % 50 === 0) {
ladoo = createSprite(Math.round(random(50,width-100)), -50, 20 , 20);
ladoo.addImage(ladooImg);
ladoo.scale=0.1;
ladoo.velocityY = 3;
ladoo.lifetime = 150;
ladooGroup.add(ladoo);  
}
}

function Win(){
  clear()

  reset.visible = true;
  

  if(frameCount % 15 === 0){
    confetti = createSprite(Math.round(random(50,width-100)),-10,100,100);
    confetti.addImage(confettiImg);
    confetti.scale=0.1;
    confetti.velocityY = 5;
  }
  
  imageMode(CENTER);
  image(congratsImg,width/2,height/2,1200,800);

  if(mousePressedOver(reset)){
    location.reload();
  }

}






