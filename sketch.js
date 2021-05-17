const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var ground, boy, tree, stone, launcher;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10, mango11, mango12;
var launchingForce = 100;

function preload(){
	boy = loadImage("images/boy.png");
}

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	stone = new Stone(235,420,30);
	
	mango1 = new Mango(1110,120,30);
	mango2 = new Mango(1180,160,30);
	mango3 = new Mango(1010,180,30);
	mango4 = new Mango(980,90,30);
	mango5 = new Mango(1050,90,30);
	mango6 = new Mango(980,260,30);
	mango7 = new Mango(900,230,25);
	mango8 = new Mango(1130,200,25);
	mango9 = new Mango(1090,250,25);
	mango10 = new Mango(1180,240,25);
	mango11 = new Mango(1070,175,25);
	mango12 = new Mango(940,160,25);
	
	tree = new Tree(1050,610);
	ground = new Ground(width/2, 600, width, 20);
	launcher = new Launcher(stone.body, {x:220, y:440});

	Engine.run(engine);
}

function draw() {
	background("lightblue");
	textSize(25);
	text("Press Space to get a Second chance to Play!", 50, 50);
	image(boy,180,363,200,300);
	//Engine.update(engine);
	
	tree.display();
	stone.display();
	
	mango1.display();
  	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();
	mango10.display();
	mango11.display();
	mango12.display();

	ground.display();
	launcher.display();

	detectCollision(stone,mango1);
  	detectCollision(stone,mango2);
	detectCollision(stone,mango3);
	detectCollision(stone,mango4);
	detectCollision(stone,mango5);
	detectCollision(stone,mango6);
	detectCollision(stone,mango7);
	detectCollision(stone,mango8);
	detectCollision(stone,mango9);
	detectCollision(stone,mango10);
	detectCollision(stone,mango11);
	detectCollision(stone,mango12);
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY})
}

function mouseReleased(){
	launcher.fly();
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body, {x:235, y:420});
		launcher.attach(stone.body);
	}
}

function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position;
  	stoneBodyPosition=lstone.body.position;
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
  	if(distance<=lmango.r+lstone.r){
  	  Matter.Body.setStatic(lmango.body,false);
    }
}



