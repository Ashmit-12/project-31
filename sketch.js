const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground;
var division1,division2,division3,division4,division5,division6,division7;
var plinkos=[];
var particles=[];

function setup() {
  createCanvas(480,600);
    engine = Engine.create();
    world = engine.world;
    ground=new Ground(240,600,480,20);
    division1=new Division(0,500,10,200);
    division2=new Division(70,500,10,200);
    division3=new Division(140,500,10,200);
    division4=new Division(210,500,10,200);
    division5=new Division(280,500,10,200);
    division6=new Division(350,500,10,200);
    division7=new Division(420,500,10,200);

    for (var j=15; j <=width; j=j+50)
  {
plinkos.push(new Plinko(j,75));
  }
  for( var j=15;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,175));
  }
  for( var j=15;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,275));
  }
  for( var j=15;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,375));
  }

 
  

}

function draw() {
  Engine.update(engine);
  background(5,0,0);  
  ground.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();
  if(frameCount%30===0){
    particles.push(new Particle(random(width/2*10,width/2+10),10,10));
  }
  
  for(var j=0;j<particles.length;j++){
    particles[j].display();
  }
  for(var k=0;k<plinkos.length;k++){
    plinkos[k].display();
  }
}