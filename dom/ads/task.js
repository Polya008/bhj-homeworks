const rotatorCase = Array.from(document.querySelectorAll('.rotator__case'));
let activeElem = document.querySelector('.rotator__case_active');


let interval = setInterval(() => {


let currentIndex = rotatorCase.findIndex((item) => item.classList.contains('rotator__case_active'));//0
let nextIndex = currentIndex + 1;
let nextElem = rotatorCase[currentIndex + 1];


		activeElem.classList.remove('rotator__case_active');
		nextElem.classList.add('rotator__case_active');


         activeElem = nextElem;

         if(currentIndex ===  rotatorCase.length ) {
			nextIndex = 0;
		}

console.log(currentIndex)
console.log(rotatorCase.length)
} ,1000);