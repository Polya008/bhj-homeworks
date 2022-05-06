let holeTarget = document.getElementById(`hole${index}`);
let deadMole = document.getElementById('dead');
let missed = document.getElementById('lost');

for(let i, i < 9, i++) {
	holeTarget.onclick = function (){
		if(holeTarget === activateHole){
			deadMole.textContent++;
		} else {
			missed.textContent++;
		}
	}
}

if(deadMole.textContent === 10) {
	alert('Вы победили!');
} else if(missed.textContent === 5){
	alert('Вы проиграли...');
}