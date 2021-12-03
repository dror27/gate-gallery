var images = [
	"https://images.squarespace-cdn.com/content/v1/599ade14893fc023a0032c4f/1622391070256-PAPO5HAETKQQ53101TME/4.png?format=2500w",
	"https://images.squarespace-cdn.com/content/v1/599ade14893fc023a0032c4f/1622391143395-TQT4LSE5O6E1HFUPG576/2.png?format=2500w",
	"https://images.squarespace-cdn.com/content/v1/599ade14893fc023a0032c4f/1622391179166-DMG925B589LFO2FJMTEM/9.png?format=2500w",
	"https://images.squarespace-cdn.com/content/v1/599ade14893fc023a0032c4f/1622391212584-NOMM95KLYAN168SGL7BF/6.png?format=2500w"
];
var	showing = 0;
var time = 10000;

function start() {
	changeImage();
}

function changeImage() {
	document.getElementById("slide").src = images[showing];
	showing = (showing + 1) % images.length;
	setTimeout("changeImage()", time);

}