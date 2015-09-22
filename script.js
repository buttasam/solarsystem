$(function() {

	var canvas = document.getElementById("board");
	var g = canvas.getContext("2d");

	var img = new Image();
	img.onload = function () {
	    g.drawImage(img, 0, 0);
	}
	img.src = "img/space.png";

	// game loop
	setInterval(function() {
		gameloop(g);
	}, 30);

});

var Planet = function(x, y, speed, radius, distance) {
	this.x = x;
	this.y = y;
	this.speed = speed;
	this.radius = radius;
	this.distance = distance;
	this.angle = randAngle();

	this.update = function()
	{
		if(this.angle >= Math.PI * 2)
		{
			this.angle = 0;
		}
		this.angle += ((Math.PI * 2) / 100) / this.speed;

		this.x = Math.sin(this.angle) * this.distance + sun.x;
		this.y = Math.cos(this.angle) * this.distance + sun.y;
	}
}

var sun = new Planet(400, 400, 4, 40, 0);
var mercur = new Planet(0, 0, 0.240, 5, 60);
var venus = new Planet(0, 0, 0.615, 7, 90);
var earth = new Planet(0, 0, 1, 9, 130);
var mars = new Planet(0, 0, 1.8808, 8, 180);
var jupiter = new Planet(0, 0, 11.87, 15, 230);
var saturn = new Planet(0, 0, 29.45, 13, 290);
var uran = new Planet(0, 0, 84.07, 12, 350);
var neptun = new Planet(0, 0, 164.79, 11, 385);

var countOfLoops = 0;

function gameloop(g)
{
	render(g);
}

function render(g)
{
	//clear board
	clear(g);

	circle(g, sun.x, sun.y, sun.radius, "yellow");

	mercur.update();
	circle(g, mercur.x, mercur.y, mercur.radius, "grey");

	venus.update();
	circle(g, venus.x, venus.y, venus.radius, "rgba(255, 152, 61 ,1)");

	earth.update();
	circle(g, earth.x, earth.y, earth.radius, "blue");

	mars.update();
	circle(g, mars.x, mars.y, mars.radius, "red");

	jupiter.update();
	circle(g, jupiter.x, jupiter.y, jupiter.radius,  "rgba(255, 211, 61 ,1)");

	saturn.update();
	circle(g, saturn.x, saturn.y, saturn.radius,  "rgba(245, 238, 144 ,1)");

	uran.update();
	circle(g, uran.x, uran.y, uran.radius,  "rgba(137, 228, 246 ,1)");

	neptun.update();
	circle(g, neptun.x, neptun.y, neptun.radius,  "rgba(137, 151, 246 ,1)");

	g.font = "26px Arial";
	g.textAlign = "left";
	g.fillStyle = "white";
	g.fillText("Model our the SOLAR SYSTEM", 50, 50);

}

function circle(g, x, y, radius, color)
{
	g.beginPath();
	g.fillStyle = color;
	g.arc(x, y, radius, 0, Math.PI * 2);
	g.fill();
	g.closePath();
}

function clear(g)
{
	g.clearRect(0, 0, g.canvas.width, g.canvas.height);
}

function randNum(from, to)
{
	return (Math.floor(Math.random() * to) + from);
}

function randAngle()
{
	return (Math.PI * (Math.random() + randNum(0, 2)));
}
