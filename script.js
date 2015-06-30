$(function() {
	
	var canvas = document.getElementById("platno");
	var g = canvas.getContext("2d");
	
	var img = new Image();
	img.onload = function () {
	    g.drawImage(img, 0, 0);
	}
	img.src = "img/space.png";

	// herní smyčka
	setInterval(function() {
		gameloop(g);
	}, 30);
	
	
	$("#platno").mousedown(function(e) {
		    
		    var mouseX, mouseY;

	        mouseX = e.offsetX;
	        mouseY = e.offsetY;

	        $("#xSpan").html(mouseX);
	        $("#ySpan").html(mouseY);
	});
	
});

var Planeta = function(x, y, rychlost, polomer, vzdalenost) {
	this.x = x;
	this.y = y;
	this.rychlost = rychlost;
	this.polomer = polomer;
	this.vzdalenost = vzdalenost;
	this.uhel = randUhel();
	
	this.update = function()
	{
		if(this.uhel >= Math.PI * 2)
		{
		this.uhel = 0;
		}
		this.uhel += ((Math.PI * 2) / 100) / this.rychlost;		
		
		this.x = Math.sin(this.uhel) * this.vzdalenost + slunce.x;
		this.y = Math.cos(this.uhel) * this.vzdalenost + slunce.y;
	}
}

var slunce = new Planeta(400, 400, 4, 40, 0);
var merkur = new Planeta(0, 0, 0.240, 5, 60);
var venuse = new Planeta(0, 0, 0.615, 7, 90);
var zeme = new Planeta(0, 0, 1, 9, 130);
var mars = new Planeta(0, 0, 1.8808, 8, 180);
var jupiter = new Planeta(0, 0, 11.87, 15, 230);
var saturn = new Planeta(0, 0, 29.45, 13, 290);
var uran = new Planeta(0, 0, 84.07, 12, 350);
var neptun = new Planeta(0, 0, 164.79, 11, 385);

var pocetObehu = 0;

function gameloop(g)
{
	render(g);
}

function render(g)
{
	//vyčištění plátna
    clear(g);

	kruh(g, slunce.x, slunce.y, slunce.polomer, "yellow");	
	
	merkur.update();
	kruh(g, merkur.x, merkur.y, merkur.polomer, "grey");
	
	venuse.update();
	kruh(g, venuse.x, venuse.y, venuse.polomer, "rgba(255, 152, 61 ,1)");
	
	zeme.update();
	kruh(g, zeme.x, zeme.y, zeme.polomer, "blue");	
	
	mars.update();
	kruh(g, mars.x, mars.y, mars.polomer, "red");	
	
	jupiter.update();
	kruh(g, jupiter.x, jupiter.y, jupiter.polomer,  "rgba(255, 211, 61 ,1)");
	
	saturn.update();
	kruh(g, saturn.x, saturn.y, saturn.polomer,  "rgba(245, 238, 144 ,1)");
	
	uran.update();
	kruh(g, uran.x, uran.y, uran.polomer,  "rgba(137, 228, 246 ,1)");
	
	neptun.update();
	kruh(g, neptun.x, neptun.y, neptun.polomer,  "rgba(137, 151, 246 ,1)");

    g.font = "26px Arial";
    g.textAlign = "left";
    g.fillStyle = "white";
    g.fillText("Model sluneční soustavy", 50, 50);
    	
}

function kruh(g, x, y, radius, color)
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

function randUhel()
{
	return (Math.PI * (Math.random() + randNum(0, 2)));
}
