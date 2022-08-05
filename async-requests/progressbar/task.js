const progress = document.getElementById('progress');
const send = document.getElementById('send');

const xhr = new XMLHttpRequest();

send.addEventListener('click', (e) => {
	e.preventDefault;
	xhr.addEventListener('readystatechange', () => {
		if(xhr.readyState === 0){
			progress.value = 0.1;
		}else if(xhr.readyState === 1){
			progress.value = 0.3;
		}else if(xhr.readyState === 2){
			progress.value = 0.6;
		}else if(xhr.readyState === 3){
			progress.value = 0.9;
		}else if(xhr.readyState === 4){
			progress.value = 1.0;
		}
	});

	xhr.response = 'json';
	xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
	xhr.send();
});

