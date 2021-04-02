const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

 var ball, ground, roof;
 var chain;

var flag=0;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    roof= new Ground(200,5,2500,10)
    ball= new Ball(200,350,30);
    chain= new Chain(ball.body, roof.body);
    
  block1 = new Block(330,235,40,50);
  block2 = new Block(360,235,40,50);
  block3 = new Block(390,235,40,50);
  block4 = new Block(420,235,40,50);
  block5 = new Block(450,235,40,50);
  block6 = new Block(360,195,40,50);
  block7 = new Block(390,195,40,50);
  block8 = new Block(420,195,40,50);
  block9 = new Block(390,155,40,50);

}

function draw(){
    background("white");
    Engine.update(engine);
  ground.display();
  ball.display();
  roof.display();
  chain.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display(); 
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  
  
  
 // var collision = Matter.SAT.collides(b6.body, rock.body)
  //if(collision.collided){
 //    flag=1;
 // }
  //  if(flag===1){
   // textSize(30);
   // fill("blue");
   // text("Crash",600,200);
    
  //  }
}


function keyPressed() { 
	if (keyCode === RIGHT_ARROW){ 
      Matter.Body.applyForce(ball.body,ball.body.position,{x:200,y:-200}); } 

}
