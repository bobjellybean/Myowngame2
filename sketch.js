const Engine= Matter.Engine;
const World= Matter.World;
const Body=Matter.Bodies;

var  bomb, bullet, fighter, melon

function setup()
{
    var canvas = createCanvas(1200,800);
    engine=Engine.create();
    world= engine.world();

    var bomb = new bomb(0,0);

    var fighter = new jetplane(0,0);

    var melon = new mellon(0,0);

    var bullet = new bullet(0,0);
}

function draw()  {
    background("white");



    drawsprites();
}