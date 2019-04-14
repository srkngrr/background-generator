var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.querySelector(".random");
var firstpage = document.querySelector(".firstpage");



function setGradient () {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
} 

function firstPageColor (){
	body.style.background = "linear-gradient(to right, red, yellow)"; 
}

function randomColors () {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value
	+ ", " 
	+ color2.value
	+ ")";
}

color1.addEventListener("input", setGradient)
color2.addEventListener("input", setGradient)
firstpage.addEventListener("click", firstPageColor)
random.addEventListener("click", randomColors)

