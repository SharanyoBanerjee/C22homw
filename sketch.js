var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var rect1,rect2,rect3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	rect1Sprite = createSprite(460,650,300,20)
	rect1Sprite.shapeColor = ("red")
	
	rect2Sprite = createSprite(300,620,20,100)
	rect2Sprite.shapeColor = ("red")
	
	rect3Sprite = createSprite(600,620,20,100)
	rect3Sprite.shapeColor = ("red")
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 180, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)



	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:true});
	World.add(world, packageBody);

	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);

	 rect1 = Bodies.rectangle(460,650,300,20,{isStatic:true}); 
	 World.add(world,rect1);

	 rect2 =Bodies.rectangle(300,620,20,100,{isStatic:true}) 
	 World.add(world,rect2);

	 rect3 = Bodies.rectangle(600,620,20,100,{isStatic:true}) 
	 World.add(world,rect3);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y-20; 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic( packageBody ,false);
	
  }
}



