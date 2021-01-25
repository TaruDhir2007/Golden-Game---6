var player, playerImg;
var scene1Img, scene1;
var exit, exitImg;
var scene2, scene2Img;
var eatPlayer, eatPlayerImg;
var pan, panImg;
var egg, eggImg;
var next, nextImg;
//var count = World.seconds;
var clean;
var clickSound;
var touch;
var cup, cupImg;
var fry, fryImg;
var banana, bananaImg;
var cleanScore = 0;
var coffee, coffeeImg;
var livingr, livingrImg;
var plate, plateImg;
var shirt, shirtImg;
var getReady , getReadyImg;
var mouse, mouseImg;
var food, foodImg;
var book , bookImg;
var OMG, OMGimg;
var  broom, broomImg;
var creepy , creepyImg;
var web, webImg;
var bathroom, bathroomImg;
var ready, readyImg;


function preload(){
  scene1Img = loadImage("images/sleeping.png");
  exitImg = loadImage("images/exit.png");
  scene2Img = loadImage("images/kitchen top.png");
  eatPlayerImg = loadImage("images/eating.png");
  panImg = loadImage("images/frypan.png");
  eggImg = loadImage("images/egg.png");
  fryImg = loadImage("images/half fry.png");
  coffeeImg = loadImage("images/coffe.png");
  bananaImg = loadImage("images/banana.png");
  livingrImg = loadImage("images/living.png")
  plateImg = loadImage("images/Plate.png")
  cupImg = loadImage("images/coffeeCup.png");
  nextImg = loadImage("images/next.png")
  
  OMGimg = loadImage("images/OMG.png");
  mouseImage = loadImage("images/mouse.png");
  foodImg = loadImage("images/food.png");
  clickSound = loadSound("images/Good_Click.wav");
  bookImg = loadImage("images/book.png");
  creepyImg = loadImage("images/creepy.png");
  getReadyImg = loadImage("images/get Ready.png")
  webImg = loadImage("images/web.png");
  broomImg = loadImage("images/broom.png");

  shirtImg = loadImage("images/shirt.png");
  bathroomImg = loadImage("images/washroom.jpg");
  readyImg = loadImage("images/Ready.png");
  dress1Img = loadImage("images/dress1.png");
  dress2Img = loadImage("images/dress2.png");
  dress3Img = loadImage("images/dress 3.png");
  top1Img = loadImage("images/top 1.png");
  top2Img = loadImage("images/Top 2.png");
  top3Img = loadImage("images/top 3.png");
  pant1Img = loadImage("images/pant 1.png");
  pant2Img = loadImage("images/pant 2.png")
  pant3Img = loadImage("images/pant 3.png");
  casualImg = loadImage("images/Casual.png")
}

function setup() {
  createCanvas(500, 490);
  scene1 = createSprite(250, 250, 10, 10);
  scene1.addImage("sleeping image", scene1Img);
  scene1.scale = 0.65;
  
  exit = createSprite(450, 450);
  exit.addImage("Exit Image", exitImg)
 
 
  
  
  scene2 = createSprite(250, 250);
  scene2.addImage("kitchen top image", scene2Img);
  scene2.scale = 0.5;
  scene2.visible = false;
  exit.scale = 0.45;
  
  
  eatPlayer = createSprite(60, 400);
  eatPlayer.addImage("girl eating", eatPlayerImg);
  eatPlayer.scale = 0.4;
  eatPlayer.visible = false;
  banana =  createSprite(150 , 100);
  banana.addImage("banana Image", bananaImg);
  banana.scale = 0.3;
  banana.visible = false;
  pan = createSprite(275, 250);
  pan.addImage("fry pan", panImg ) 
  pan.scale = 1;
 
  //pan.debug = true
  pan.visible = false;
  fry = createSprite(295 , 125);
  fry.addImage("half fry egg", fryImg)
  fry.scale = 0.4;
  fry.visible = false;
 // pan.setCollider("rectangle",0,0,40,40)
  coffee = createSprite(50 , 80);
  coffee.addImage("coffee maker", coffeeImg);
  coffee.scale = 0.15; 
  coffee.visible = false;
  egg = createSprite(290, 100);
  egg.addImage("raw egg", eggImg);
  egg.scale = 0.25;
 // egg.debug = true
  egg.visible = false;
 

  plate = createSprite(200, 70);
  plate.addImage("Plate Image", plateImg);
  plate.scale = 0.3;
  plate.visible = false;
  fill(rgb(106 , 245 , 185));
  touch = createSprite(200, 50, 5, 5 );
  //next.depth = scene2.depth;
 // next.depth += 1;
 next = createSprite(450 , 50);
 next.addImage("Next button", nextImg);
 next.scale = 0.35;
 next.visible=false;

 livingr = createSprite(250, 250);
 livingr.addImage("Living room", livingrImg);
 livingr.scale = 0.7;
 livingr.visible = false;
 OMG = createSprite( 60 , 400);
 OMG.addImage("Starstrucked" , OMGimg);
 OMG.scale = 0.9;
 OMG.visible = false;
 
book = createSprite(405 , 325);
book.addImage("Fallen Book" , bookImg);
book.scale = 0.35;
book.visible  = false;

shirt = createSprite(450, 450);
 shirt.addImage("Stained shirt", shirtImg);
 shirt.scale= 0.3;
 shirt.visible = false;

 mouse = createSprite(300, 450);
 mouse.addImage("Mouse", mouseImage);
 mouse.scale =0.45;
 mouse.visible=false;

 food = createSprite(260, 345);
 food.addImage("Leftover food", foodImg);
 food.scale = 0.42;
 food.visible = false;

creepy = createSprite(185, 300);
creepy.addImage(creepyImg);
creepy.scale = 0.25;
creepy.visible = false;

web = createSprite(210, 90);
web.addImage(webImg);
web.scale = 0.6;
web.visible = false;

getReady = createSprite(50 , 50);
getReady.addImage(getReadyImg);
getReady.scale = 0.4;
getReady.visible = false;


broom = createSprite(100 , 450);
broom.addImage(broomImg);
broom.scale = 0.1;
broom.visible = false;

bathroom = createSprite(250, 250);
bathroom.addImage(bathroomImg);
bathroom.scale = 1.3;
bathroom.visible = false;

ready = createSprite(50, 350);
ready.addImage(readyImg);
ready.scale = 0.5;
ready.visible = false;

hang1 = createSprite( 250 , 30 , 500 , 10);
hang1.shapeColor = "black";
hang2 = createSprite( 250 , 150 , 500 , 10);
hang2.shapeColor = "black";
hang3 = createSprite( 250 , 300 , 500 , 10);
hang3.shapeColor = "black";
hang1.visible = false;
hang2.visible = false;
hang3.visible = false;
dress1 = createSprite(50 , 90);
dress1.addImage(dress1Img);
dress1.scale = 0.55;
dress1.visible = false;
dress2 = createSprite(120 , 90);
dress2.addImage(dress2Img);
dress2Img.scale = 0.005;
dress2.visible = false;
dress3 = createSprite(190 , 90);
dress3.addImage(dress3Img);
dress3.scale = 0.5;
dress3.visible = false;

top1 = createSprite(260 , 70);
top1.addImage(top1Img);
top1.scale = 0.6;
top1.visible = false;
top2 = createSprite(340 , 80);
top2.addImage(top2Img);
top2.scale = 0.55;
top2.visible = false;
top3 = createSprite(460 , 70);
top3.addImage(top3Img);
top3.scale = 0.6;
top3.visible = false;

casual = createSprite(200 , 290);
casual.addImage(casualImg);
casual.scale = 0.3;
casual.visible = false;
}

function draw() {
  background(0);

  if(mousePressedOver(exit)){
    scene1.destroy();
    exit.destroy();
    scene2.visible = true;
    eatPlayer.visible = true;
    banana.visible = true;
    pan.visible = true;
    coffee.visible = true;
    egg.visible = true;

  }
 live();

    if(egg.x < 255 &&  egg.y > 200){
      egg.visible = false;
      fry.visible = true;
      plate.visible = true;
      fry.depth = plate.depth;
      fry.depth += 1;
      banana.depth = plate.depth;
      banana.depth += 1;
      fill("white");
      textSize(20);
      text("Put your food on the plate", 250, 250);
      
    }

    

if(fry.isTouching(touch)){
cup = createSprite(300 , 50);
cup.addImage("coffee cup", cupImg);
cup.scale = 0.1;

cup.lifetime=1;
banana.x = 200;
banana.y = 60;
livingr.depth=cup.depth;
livingr.depth=livingr.depth+1;
//next.visible = true;
}   

  drawSprites();
if(keyDown(DOWN_ARROW)){
    egg.y +=2
  }
  if(keyDown(RIGHT_ARROW)){
    egg.x +=2
  }
  if(keyDown(LEFT_ARROW)){
    egg.x -=2
  }
  if(keyDown(UP_ARROW)){
    egg.y -=2
  }

  if(keyDown(DOWN_ARROW)){
    fry.y +=2
  }
  if(keyDown(RIGHT_ARROW)){
    fry.x +=2
  }
  if(keyDown(LEFT_ARROW)){
    fry.x -=2
  }
  if(keyDown(UP_ARROW)){
    fry.y -=2
  }

}



function live()
{
  
 if(banana.x ===200 && World.seconds>10){
    
  next.visible = true;
   if(mousePressedOver(next)){
 
   next.destroy();
  scene2.destroy();
   cup.destroy();
   plate.destroy();
   banana.destroy();
   fry.destroy();
  
    livingr.visible=true;
    
    OMG.visible= true;
    shirt.visible=true;
    mouse.visible= true;
    food.visible=true;
    book.visible = true;
    web.visible = true;
    broom.visible = true;
    creepy.visible = true;
  OMG.depth= livingr.depth;
 OMG.depth += 1; 
 shirt.depth= livingr.depth;
 shirt.depth += 1; 
 food.depth= livingr.depth;
 food.depth += 1; 
 mouse.depth= livingr.depth;
 mouse.depth += 1; 
 book.depth= livingr.depth;
 book.depth += 1; 
 web.depth= livingr.depth;
 web.depth += 1; 
 creepy.depth= livingr.depth;
 creepy.depth += 1; 
 broom.depth = OMG.depth;
 broom.depth += 1; 
 broom.depth= livingr.depth;
 broom.depth += 1; 
   }
   if(keyDown(DOWN_ARROW)){
    broom.y +=2
  }
  if(keyDown(RIGHT_ARROW)){
  broom.x +=2
  }
  if(keyDown(LEFT_ARROW)){
    broom.x -=2
  }
  if(keyDown(UP_ARROW)){
    broom.y -=2
  }
}
   if(broom.isTouching(food))
   {
    clickSound.play();
     food.destroy();
     
     cleanScore+=1;
   }
   if(broom.isTouching(shirt))
   {
    clickSound.play();
     shirt.destroy();
     cleanScore+=1;
   }
   if(broom.isTouching(mouse))
   {
    clickSound.play();
     mouse.destroy();
     cleanScore+=1;
   }
   if(broom.isTouching(book))
   {
    clickSound.play();
     book.destroy();
     cleanScore+=1;
   }
   if(broom.isTouching(web))
   {
    clickSound.play();
     web.destroy();
     cleanScore+=1;
   }
   if(broom.isTouching(creepy))
   {
    clickSound.play();
     creepy.destroy();
     cleanScore+=1;
   }
  

   if(cleanScore===6)
   {
    
     OMG.destroy();
    getReady.visible = true;
    
getReady.depth  = livingr.depth;
getReady.depth += 1;
   }
if(mousePressedOver(getReady)){
getReady.destroy();
bathroom.visible = true;
bathroom.depth = getReady.depth;
bathroom.depth += 1;
ready.visible = true;
ready.depth = bathroom.depth;
ready.depth += 1;
dress1.visible = true;
dress1.depth = bathroom.depth;
dress1.depth += 1;

dress2.visible = true;
dress2.depth = bathroom.depth;
dress2.depth += 1;

dress3.visible = true;
dress3.depth = bathroom.depth;
dress3.depth += 1;

hang1.visible = true;
hang1.depth = bathroom.depth;
hang1.depth += 1;
hang2.visible = true;
hang2.depth = bathroom.depth;
hang2.depth += 1;

top1.visible = true;
top1.depth = bathroom.depth;
top1.depth += 1;

top2.visible = true;
top2.depth = hang1.depth;
top2.depth += 1;

top3.visible = true;
top3.depth = bathroom.depth;
top3.depth += 1;


}
live_3();

}


function live_3(){
  if(mousePressedOver(top1) || mousePressedOver(top2) || mousePressedOver(top3) ){
    casual.visible = true;
    casual.depth = bathroom.depth;
    casual.depth += 1;
    live_4();
  }
 
   }
  
function live_4(){
  if(casual.visible == true && World.seconds > 2){
    casual.destroy();
  }
}





