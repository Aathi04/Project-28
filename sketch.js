const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(1200,400);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,1200,20);
	paper = new Paper(200,200,70);
	dustbinObj=new dustbin(700,380);

	launcher = new Launcher(paper.body,{x :200,y :100});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  paper.display();
  ground.display();
  dustbinObj.display();
  launcher.display();
  drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(paper.body,{x :mouseX , y : mouseY});


}

function mouseReleased(){
    launcher.fly();
}


