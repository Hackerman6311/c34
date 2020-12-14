const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var box1,box2,box3,box4,box15,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20
var engine, world;
var ground
var ball
var rope
function setup(){
    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,600,1200,20);
  box1=new BaseClass(900,100,70,70)  
  box2=new BaseClass(900,100,70,70) 
  box3=new BaseClass(900,100,70,70)
  box4=new BaseClass(900,100,70,70)
  box5=new BaseClass(900,100,70,70)
  box6=new BaseClass(900,100,70,70)
  box7=new BaseClass(800,100,70,70)
  box8=new BaseClass(800,100,70,70)
  box9=new BaseClass(800,100,70,70)
  box10=new BaseClass(800,100,70,70)
  box11=new BaseClass(800,100,70,70)
  box12=new BaseClass(800,100,70,70)
  box13=new BaseClass(700,100,70,70)
  box14=new BaseClass(700,100,70,70)
  box15=new BaseClass(700,100,70,70)
  box16=new BaseClass(700,100,70,70)
  box17=new BaseClass(700,100,70,70)
  box18=new BaseClass(700,100,70,70)
  box19=new BaseClass(700,100,70,70)
  box20=new BaseClass(700,100,70,70)
  ball=new Ball(200,200,80,80)
  rope=new SlingShot(ball.body,{x:500,y:50})
}

function draw(){
  background(180) 
    
       
    Engine.update(engine);
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    ball.display();
    rope.display();
    //strokeWeight(4);
    
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    //}
}


