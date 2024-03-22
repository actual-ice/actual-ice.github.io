const no = document.getElementById("No");
const yes =document.getElementById("Yes");
const rect = no.getBoundingClientRect();

function teleport(){
	const x=String((Math.floor(Math.random() * (screen.width - 300))) - rect.left) + "px";
	const y=String((Math.floor(Math.random() * (screen.height  -200))) - rect.top) + "px";
	no.style.position = "relative";
	no.style.left=x;
	no.style.top=y;
}

function rickroll(){
	window.location.assign("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
}

function gift(){
	window.location.assign("gift.html");
}

function message(){
	window.location.assign("message.html");
}

no.addEventListener("mouseover", teleport);
no.addEventListener("click", rickroll);
yes.addEventListener("click", message);