const popup = document.getElementById('subscribe-modal');
const closeButton = document.querySelector('.modal__close_times');

function getCookie(name) {
	const pairs = document.cookie.split('; ');
	const cookie = pairs.find(p => p.startsWith(name + '='));
	//return cookie && cookie.substring(name.length + 1);
}

if(!getCookie('closePopup')){
	window.onload = function(){
		popup.classList.add('modal_active');

	}
}


closeButton.addEventListener('click', (e) => {
	popup.classList.remove('modal_active');
	document.cookie = 'closePopUp =true';
	getCookie('closePopUp')
})