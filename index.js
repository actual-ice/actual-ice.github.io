const password = document.getElementById("password");
const button = document.getElementById("submitbtn");

function activate(){
	if (password.value == "7-18 26-14-12") {
		//alert("good job");
		window.location.assign("page2.html")
	}
	else {
		alert("wrong password");
		password.value="";
	}
}

button.addEventListener("click", activate);