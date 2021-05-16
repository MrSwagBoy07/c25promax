const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var boxes=[]
function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;
 ground =new Ground(200,390,2000,10);
}

function draw(){
    background(255);
    Engine.update(engine);
    
    ground.display();
    for(var i=0;i<boxes.length;i++){
        boxes[i].display();
    }
    //Text("",80,75);
    var title=createElement('h1');
    title.html("Click On the screen to create your rain drops");
    title.position(100,100);
}
function mousePressed(){
if(mouseY<300){
boxes.push(new Box(mouseX,mouseY,random(10,100),random(10,100)))
}
}