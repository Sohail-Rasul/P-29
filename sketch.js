const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var base;
var sling;

function preload()
{
	
}

function setup() {
  createCanvas(800,800);
  // createSprite(400, 200, 50, 50);
  
  engine = Engine.create();
  world = engine.world;
  
  polygon=Bodies.circle(50,200,20);
  World.add(world,polygon);

  base=new Ground(600,400,200,40);
  sling=new SlingShot(this.polygon,{x:100,y:200});

  Engine.run(engine);
}

function draw() {
  background(255,255,255);  
  //drawSprites()
  base.display();
  sling.display();

}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}