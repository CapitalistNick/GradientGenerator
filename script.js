var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.querySelector(".random");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

function setDefaultGradient() {
	color1.value = "#ff0000";
	color2.value = "#ffff00";
	setGradient();
	css.textContent = body.style.background + ";";
}
setDefaultGradient();

function randomColor() {
	var randomNum = Math.floor(Math.random()*16777215).toString(16);
	var randomColorGen = "#" + randomNum;
	return randomColorGen;
}

function addRandomNumInput() {
	color1.value = randomColor();
	color2.value = randomColor();
	setGradient();
}
random.addEventListener("click", addRandomNumInput);


