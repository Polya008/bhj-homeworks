let slides = Array.from(document.querySelectorAll('.slider__item'));
let prev = document.querySelector('.slider__arrow_prev');
let next = document.querySelector('.slider__arrow_next');


let currentActive = slides.findIndex((item) => item.classList.contains('slider__item_active'));

function slide(newActive){
	slides[currentActive].classList.remove('slider__item_active');
	slides[newActive].classList.add('slider__item_active');
	currentActive = newActive;
	
}

prev.addEventListener('click', () => {
	let newSlide = currentActive + 1;
	newSlide = newSlide >= slides.length ?  0 : newSlide;
	slide(newSlide);
});

next.addEventListener('click', () => {
	let newSlide = currentActive -1;
	newSlide = newSlide < 0 ? slides.length -1 : newSlide;
	slide(newSlide);
});

//повыш сложность
//let currentDot = slides[currentActive];
//let currentDot = sliderDots.findIndex((item) => item.classList.contains('slider__dot_active'));


/*function dots(newDot){

	sliderDots[currentDot].classList.remove('slider__dot_active');
	sliderDots[newDot].classList.add('slider__dot_active');

	currentDot = newDot;
}

*/