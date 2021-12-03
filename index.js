var time = 7000;

var images = [
	"https://images.squarespace-cdn.com/content/v1/599ade14893fc023a0032c4f/1622391070256-PAPO5HAETKQQ53101TME/4.png?format=2500w",
	"https://images.squarespace-cdn.com/content/v1/599ade14893fc023a0032c4f/1622391143395-TQT4LSE5O6E1HFUPG576/2.png?format=2500w",
	"https://images.squarespace-cdn.com/content/v1/599ade14893fc023a0032c4f/1622391179166-DMG925B589LFO2FJMTEM/9.png?format=2500w",
	"https://images.squarespace-cdn.com/content/v1/599ade14893fc023a0032c4f/1622391212584-NOMM95KLYAN168SGL7BF/6.png?format=2500w",
	"https://images.squarespace-cdn.com/content/v1/599ade14893fc023a0032c4f/1622391259998-6411CVW1EXCWPIRCALBA/5.png?format=2500w",
	"https://images.squarespace-cdn.com/content/v1/599ade14893fc023a0032c4f/1622391288295-Y1YJNPHTM8ISVQIGFCIQ/11.png?format=2500w",
	"https://images.squarespace-cdn.com/content/v1/599ade14893fc023a0032c4f/1622391910657-PGL9MO5ZYRWELNUJGL00/12.png?format=2500w",
	"https://images.squarespace-cdn.com/content/v1/599ade14893fc023a0032c4f/1622391946208-T1JM3QQ0IVQRI3YGLAH7/1.png?format=2500w",
	"https://images.squarespace-cdn.com/content/v1/599ade14893fc023a0032c4f/1622391972927-OGQBXGYXGIRQWHQC96U1/21.png?format=2500w",
	"https://images.squarespace-cdn.com/content/v1/599ade14893fc023a0032c4f/1622392009357-JHHC2GVXLHLTRB22F2NY/29.png?format=2500w",
	"https://images.squarespace-cdn.com/content/v1/599ade14893fc023a0032c4f/1622392037521-ZJ99IZTWKBI2BB4F9AQS/16.png?format=2500w",
	"https://images.squarespace-cdn.com/content/v1/599ade14893fc023a0032c4f/1622392078383-DE8HYEB85GFQCBZI4CCE/18.png?format=2500w",
	"https://images.squarespace-cdn.com/content/v1/599ade14893fc023a0032c4f/1622392107950-1F4UMJHKOUW5YP7W2QLB/24.png?format=2500w",
	"https://images.squarespace-cdn.com/content/v1/599ade14893fc023a0032c4f/1622392604482-N959J2THWLP9Z0R4U9L3/%D7%A9%D7%95%D7%A7%D7%99+%D7%97%D7%A1%D7%A7%D7%94.png?format=2500w",
	"https://images.squarespace-cdn.com/content/v1/599ade14893fc023a0032c4f/1622392139145-LVK3YL8JFH6SFS1VVDX7/7.png?format=2500w",
	"https://images.squarespace-cdn.com/content/v1/599ade14893fc023a0032c4f/1622392179007-ZE8NK5XCW1UBTJ0K3D1U/17.png?format=2500w",
	"https://images.squarespace-cdn.com/content/v1/599ade14893fc023a0032c4f/1622392210687-OD3G3TN38CMGWBX8JGU0/20.png?format=2500w",
	"https://images.squarespace-cdn.com/content/v1/599ade14893fc023a0032c4f/1622392280474-6HOZWXC73V9U90VFDOUZ/19.png?format=2500w",
	"https://images.squarespace-cdn.com/content/v1/599ade14893fc023a0032c4f/1622392317906-ZBS5POXHG8X3TI6VSRQN/15.png?format=2500w",
	"https://images.squarespace-cdn.com/content/v1/599ade14893fc023a0032c4f/1622392345717-KFCFM5RQYN3LA3TSR2MS/23.png?format=2500w",
	"https://images.squarespace-cdn.com/content/v1/599ade14893fc023a0032c4f/1622392372210-8GFMEXZEJEZ06TXUFCTE/22.png?format=2500w",
	"https://images.squarespace-cdn.com/content/v1/599ade14893fc023a0032c4f/1622392571880-0MXISW04KRVEQIY2NWIN/28.png?format=2500w",
	"https://images.squarespace-cdn.com/content/v1/599ade14893fc023a0032c4f/1622392633576-YO4SUIV3HPFE3YUA41SN/13.png?format=2500w",
	"https://images.squarespace-cdn.com/content/v1/599ade14893fc023a0032c4f/1622392253467-0X7IOS1UZAT3YN2KQCHO/%D7%A9%D7%95%D7%A7%D7%99+%D7%92%D7%95%D7%9C%D7%A9.png?format=2500w",
	"https://images.squarespace-cdn.com/content/v1/599ade14893fc023a0032c4f/1622392661655-DHKDA0MN5WZINCM9X87Y/26.png?format=2500w",
	"https://images.squarespace-cdn.com/content/v1/599ade14893fc023a0032c4f/1622393094043-I8K3XFZZ6EJV12220EJQ/27.png?format=2500w",
	"https://images.squarespace-cdn.com/content/v1/599ade14893fc023a0032c4f/1622392722704-8NRCZGBQYVU80HI85FG0/3.png?format=2500w",
	"https://images.squarespace-cdn.com/content/v1/599ade14893fc023a0032c4f/1622392764887-2RSBD0O9DRA1R7OJ4Y0I/25.png?format=2500w",
	"https://images.squarespace-cdn.com/content/v1/599ade14893fc023a0032c4f/1622393035419-AP7Z8H5Q3KTJVGFGUZNG/8.png?format=2500w",
	"https://images.squarespace-cdn.com/content/v1/599ade14893fc023a0032c4f/1622393062732-JLRHPUX1DG4DG36JDQ1Z/14.png?format=2500w",
	"https://images.squarespace-cdn.com/content/v1/599ade14893fc023a0032c4f/1622393135949-2CML0NJCZPGLUR0WPP0B/10.png?format=2500w"
];


var	showing = 0;

function start() {
	changeImage();
}

function changeImage() {
	document.getElementById("slide").src = images[showing];
	showing = (showing + 1) % images.length;
	setTimeout("changeImage()", time);

}