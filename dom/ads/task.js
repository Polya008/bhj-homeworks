const rotatorCase = Array.from(document.querySelectorAll('.rotator__case'));
let activeElem = document.querySelector('.rotator__case_active');


let interval = setInterval(() => {


let currentIndex = rotatorCase.findIndex((item) => item.classList.contains('rotator__case_active'));//0
let nextIndex = currentIndex + 1;
//let nextElem = rotatorCase[currentIndex + 1];
let nextElem = rotatorCase[nextIndex];


  if(currentIndex ===  rotatorCase.length - 1) {
  			nextElem = rotatorCase[0];
			//nextIndex = 0;
		//	currentIndex = 0;
		}
 		

		activeElem.classList.remove('rotator__case_active');
		console.log(nextElem)
		nextElem.classList.add('rotator__case_active');
		//activeElem.nextElementSibling.classList.add('rotator__case_active');

         activeElem = nextElem;

console.log(currentIndex)
console.log(nextIndex)


} ,1000);