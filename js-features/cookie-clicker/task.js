const clicker = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie");
const speed = document.getElementById("clicker__speed");

let clickerCount = clicker.textContent;
//let firstClick = new Date();


cookie.onclick = function (){
	clicker.textContent ++;

	 /*   let d = new Date();
        let t = d.getTime();*/

if(cookie.width === 200){
		cookie.width = 300;
	} else {
		cookie.width = 200;
	}

//let secondClick = new Date();
//speed.textContent = (secondClick - firstClick)/2;
}
