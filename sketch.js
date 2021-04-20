
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;



var engine,world;
var ground,ball;
var binlmg,bin;


 


function preload(){
	binImg = loadImage("Images/dustbingreen.png");
}
	


function setup() {
	var canvas = createCanvas(1200, 600);
    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    
	ground = new Ground();
	crumpledPaper = new paper();

	bin = createSprite(964,520,20,20);
	bin.addImage(binlmg);
	bin.scale = 0.45;

	binPart1 = new Dustbins(902,505,10,120);
	binPart2 = new Dustbins(962,565,130,10);
	binPart1 = new Dustbins(1024,505,10,120);
  
}


function draw() {
  background(0);
  Engine.update(engine);
  
    ground.display();
	crumbledPaper.dispaly();
	binPart1.display();
	binPart2.display();
	binPart3.display();
	 
	 drawSprites();
 
}
function keyPressed (){
     if(keyCode === UP_ARROW){
		 Matter.Body.applyForce(crumpledPaper.body,crumpledPaper.body.position,{x:74,y:-75});
	 }
}



