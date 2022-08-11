const popup = document.getElementById('subscribe-modal');
const closeButton = document.querySelector('.modal__close_times');

function getCookie(name) {
	const pairs = document.cookie.split('; ');
	console.log(pairs);
	const cookie = pairs.find(p => p.startsWith(name + '='));
	console.log(cookie);
	return cookie && cookie.substring(name.length + 1);

}
if(getCookie('closePopUp') !== true){
	window.onload = function(){
		popup.classList.add('modal_active');

	}
}


closeButton.addEventListener('click', (e) => {
	popup.classList.remove('modal_active');
	document.cookie = "closePopUp=true";
	//getCookie('closePopUp')
});