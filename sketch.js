const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var boyImg, boy, drops=[], maxDrops=100, umbrella;

function preload(){
    boyImg=loadAnimation("walkingFrame/walking_1.png","walkingFrame/walking_2.png","walkingFrame/walking_3.png","walkingFrame/walking_4.png","walkingFrame/walking_5.png","walkingFrame/walking_6.png","walkingFrame/walking_7.png","walkingFrame/walking_8.png")
}

function setup(){
    var canvas = createCanvas(400,750);
    engine = Engine.create();
    world = engine.world;
    
    boy = createSprite(200,550,10,10);
    boy.scale=0.6;
    boy.addAnimation("walk",boyImg);
    
    for(var i=0; i<maxDrops; i++){
        drops.push(new Drop(random(0,400), random(-400,400)));
    }

    umbrella=Bodies.circle(200,475,120,{isStatic:true})
    World.add(world, umbrella);

}

function draw(){
    background(0)
    Engine.update(engine);

    
    for(var i=0; i<maxDrops; i++){
        drops[i].display()
    }


    drawSprites();
}   

