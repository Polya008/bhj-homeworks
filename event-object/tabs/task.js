const tabs = Array.from(document.querySelectorAll('.tab'));
const content = Array.from(document.querySelectorAll('.tab__content'));


for(let i = 0; i < tabs.length; i++){
	tabs[i].addEventListener('click', () => {

		document.querySelector('.tab_active').classList.remove('tab_active');

		if(!tabs[i].classList.contains('tab_active')){
			tabs[i].classList.add('tab_active');
		} 

		

		console.log(document.querySelector('.tab__content_active'))
		document.querySelector('.tab__content_active').classList.remove('tab__content_active');

		content.forEach((item) => {
			if(item.closest('tab_active')){
				item.classList.add('tab__content_active');
			}
		})
	});

}