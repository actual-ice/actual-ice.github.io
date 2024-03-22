const picture = document.getElementById("picture");

function sendgift(){
	window.location.assign("gift.html");
}

picture.addEventListener("click", sendgift);