
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

const Constraint=Matter.Constraint;




function setup (){

    createCanvas(2300, 2600);
	engine = Engine.create();
	world = engine.world;



    
    Engine.run(engine)




}


   






function draw(){
    background("lightgreen");
    Engine.update(engine);








}
 