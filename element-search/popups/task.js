const popup = document.getElementById('modal_main');
window.onload = function (){
	popup.classList.add('modal_active');
	console.log(popup.classList);
};

const closeButtons = Array.from(document.querySelectorAll('.modal__close'));
for(let i = 0; i < closeButtons.length; i++){
	closeButtons[i].onclick = function(){
		if(closeButtons[i].closest('.modal')){
		popup.classList.remove('modal_active');
		}
	}
}

const success = document.querySelector('.show-success');
const showSuccess = document.getElementById('modal_success');
const closeButtonModal = showSuccess.querySelector('.modal__content');

success.onclick = function(){
	showSuccess.classList.add('modal_active');
	success.onclick = null;
}
	closeButtonModal.onclick = function (){
		if(closeButtonModal.closest('.modal')){
			showSuccess.classList.remove('modal_active');

		}

	}

	
