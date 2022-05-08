let popup = document.getElementById('modal_main');
popup.onload = function (){
	const oldClass = modal_main.className;
	oldClass = modal_active;
}

let closeButton = Array.from(document.querySelectorAll('.modal__close'));
closeButton.onclick = function(...args){
	delete oldClass = modal_active;
}

let success = document.querySelector('show-success');
let showSuccess = document.getElementById('.modal_success');
success.onclick = function(...args){
	const oldSuccess = show-success.className;
	oldSuccess = modal_active;
}