
let myTimer = document.getElementById("timer");

let interval = setInterval(function () { 
	myTimer.textContent -- ;		

if(myTimer.textContent <= 0) {
 	alert('Вы победили в конкурсе!');
	clearInterval(interval);
	}
 
},80);


