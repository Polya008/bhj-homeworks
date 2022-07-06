const tabs = Array.from(document.querySelectorAll('.tab'));
const content = Array.from(document.querySelectorAll('.tab__content'));


for(let i = 0; i < tabs.length; i++){
	tabs[i].addEventListener('click', () => {

		let tabActive = document.querySelector('.tab_active');
		tabActive.classList.remove('tab_active');


		if(!tabs[i].classList.contains('tab_active')){
			tabs[i].classList.add('tab_active');
		} 

		

		let index = tabs.indexOf(tabActive);
		console.log(index)

		document.querySelector('.tab__content_active').classList.remove('tab__content_active');

		

		//if(!content[index].classList.contains('tab__content_active')){
			content[index].classList.add('tab__content_active');
		//} 			


			});

}