const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;
var hero, monster, rope, ground;
var heroImage, monsterImage;

function preload() {
  bg = loadImage("images/gamingbackground2.png");
  heroImage = loadImage("images/superhero.png");
  monsterImage = loadImage("images/monster2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  

  hero=new Hero(200,200,250,200)
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster=new Monster(1100,-10,200,200,{isStatic:false});

  ground = new Ground(600,600,1200,20);
  box1=new Box(900,100,70,70);
  box2=new Box(900,100,70,70);
  box3=new Box(900,100,70,70);
  box4 = new Box(900,100,70,70);
  box5=new Box(900,100,70,70);
  box6 =new Box(900,100,70,70);
  box7 = new Box(800,100,70,70);
  box8 = new Box(800,100,70,70);
  box9 = new Box(800,100,70,70);
  box10= new Box(800,100,70,70);
  box11 = new Box(800,100,70,70);
  box12= new Box(800,100,70,70);
  box13= new Box(700,100,70,70);;
  box14= new Box(700,100,70,70);
  box15= new Box(700,100,70,70);
  box16= new Box(700,100,70,70);
  box17= new Box(700,100,70,70);
  box18= new Box(700,100,70,70);
  box19= new Box(700,100,70,70);
  box20= new Box(700,100,70,70);
 
  

}

function draw() {
  background(bg);

    getTime();

  Engine.update(engine);
  
 

  hero.display();
  rope.display();
  monster.display();

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

}

function mouseDragged(){
   Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  rope.fly();
}

async function getTime(){
  var response = await fetch ('http:worldtimeapi.org/api/timezone/Asia/Kolkata');
  var responseJSON = await response.json(); // to convert from API format to JSON format
  console.log(responseJSON);
  var dateTime = responseJSON.datetime; //extracting only datetime 
  var hour = dateTime.slice(11,13); //extracting only hour from datetime
  if(hour>=06 && hour<=17){
      bg="images/gamingbackground2.png";
  }

  else{
     bg="images/gamingbackground1.png";
  }

  backgroundImg = loadImage(bg);
}
//async = function which waits for some lines to be completed before executing the next line
//await = function which locates the lines which to wait for