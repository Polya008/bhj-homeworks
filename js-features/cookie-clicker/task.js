let clicker = document.getElementById("clicker__counter");
let cookie = document.getElementById("cookie");
let speed = document.getElementById("clicker__speed");

let clickerCount = clicker.textContent;

cookie.onclick = function (){
let firstClick = new Date();	

	clicker.textContent ++;

if(cookie.width === 200){
		cookie.width = 300;
	} else {
		cookie.width = 200;
	}

let secondClick = new Date();
speed.textContent = 1 / (secondClick - firstClick)  ;


}