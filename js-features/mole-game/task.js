const holeTarget = document.querySelector('.hole');
const deadMole = document.getElementById('dead');
const missed = document.getElementById('lost');
let holeTargetArr = Array.from(holeTarget);

/*function getHole(index){
	return document.getElementById('hole${index}');
}*/


	deadMole.textContent = 0;
	missed.textContent = 0;
for(let i = 1; i < holeTargetArr.length; i++) {

	holeTarget.onclick = function (){


		if(holeTarget.className.includes('.hole_has-mole')){
			deadMole.textContent++;
		} else {
			missed.textContent++;
		}

			if(deadMole.textContent === 10) {
				alert('Вы победили!');
			} else if(missed.textContent === 5){
				alert('Вы проиграли...');
			}

	}
}

