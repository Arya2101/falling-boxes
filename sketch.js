const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine;
var world;
var bodies;
var bodies2;
var gr;

function setup(){
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  bodies = new box(170,150,50,50);
  bodies2 = new box(200,300,50,50);
    gr = new ground(200,350,400,20);
}
function draw(){
    background("pink");
    Engine.update(engine);
   bodies.display();
   bodies2.display();
   gr.display();
}

