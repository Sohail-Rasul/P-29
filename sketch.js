
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var base;
var sling;
var box1,box2,box3,box4,box5,box6;
var ball;

function preload()
{
	
}

function setup() {
  createCanvas(800,800);
  // createSprite(400, 200, 50, 50);
  
  engine = Engine.create();
  world = engine.world;
  //base//
       base=new Ground(500,500,400,40);
  //Ball//
        ball= new Ball(50,200,20);
  //sling//
      sling=new SlingShot(ball.body,{x:100,y:200});
  //BOXES//
      box1= new Box(500,460,120,120);
      box2= new Box(380,460,120,120);
      box3= new Box(640,460,120,120);
      box4= new Box(560,350,120,120);
      box5= new Box(440,350,120,120);
      box6= new Box(500,240,120,120);
  

  Engine.run(engine);
}

function draw() {
  background(0);  

  //display variables//
      base.display();
      sling.display();
      box1.display();
      box2.display();
      box3.display();
      box4.display();
      box5.display();
      box6.display();
      ball.display();
}
function mouseDragged(){
      Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
       sling.fly();
}