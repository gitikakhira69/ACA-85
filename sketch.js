var Engine = Matter.Engine,
Render = Matter.Render,
Runner = Matter.Runner,
Body = Matter.Body,
Events = Matter.Events,
Composite = Matter.Composite,
Composites = Matter.Composites,
Common = Matter.Common,
MouseConstraint = Matter.MouseConstraint,
Mouse = Matter.Mouse,
Bodies = Matter.Bodies;

// create engine
var engine = Engine.create(),
world = engine.world;

// create renderer
var render = Render.create({
element: document.body,
engine: engine,
options: {
    width: 1500,
    height: 600,
    wireframes: false,
    background: "#B5EAEA",
}
});

Render.run(render);

// create runner
var runner = Runner.create();
Runner.run(runner, engine);

var wallStyle = {fillStyle:"black"};

var wall1 = Matter.Bodies.rectangle(400, 0, 800, 50, { isStatic: true, render: {fillStyle:"#a242"} }),
    wall2 = Bodies.rectangle(400,600,800,50,{isStatic:true,render:{wallStyle}}),
    wall3 = Bodies.rectangle(800,0,50,230,{isStatic:true,render:{wallStyle}}),
    wall4 = Bodies.rectangle(800,450,50,350,{isStatic:true,render:{wallStyle}}),
    wall5 = Bodies.rectangle(0,300,50,600,{isStatic:true,render:{wallStyle}});

// var smile = Composites.stack(300,300,3,5,2,2,(x,y)=>{
//     return Bodies.circle(x,y,50);
//     render:{
//         sprite:{
//             texture:"images/Smile.png"
//         }
//     }
// })

 Composite.add(world,{wall1,wall2,wall3,wall4,wall5,smile}) 

// var mouse = Mouse.create(render.canvas),
// mouseConstraint = MouseConstraint.create(engine, {
//     mouse: mouse,
//     constraint: {
//         stiffness: 0.2,
//         render: {
//             visible: false
//         }
//     }
// });

// Composite.add(world, mouseConstraint);

// keep the mouse in sync with rendering
// render.mouse = mouse;
