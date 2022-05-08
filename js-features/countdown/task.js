
let myTimer = document.getElementById("timer");

let interval = setInterval(function () { 

	myTimer.textContent -- ;

	/*function time(myTimer){
  		const minutes = Math.floor(myTimer.textContent / 60);
  		let seconds = myTimer.textContent % 60;
  		if (seconds < 10) {
 			seconds = `0${seconds}`;
 		 }

  return `${minutes}:${seconds}`
	}*/

if(myTimer.textContent <= 0) {
 	alert('Вы победили в конкурсе!');
	clearInterval(interval);
	}
 
},80);


