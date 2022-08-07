const progress = document.getElementById('progress');
const form = document.getElementById('form');
//const send = document.getElementById('send');






form.addEventListener('submit', (e) => {
	e.preventDefault();
    let xhr = new XMLHttpRequest();
    progress.value = 0;

     xhr.upload.onprogress = function(event) {
     	console.log(event.loaded);
     	console.log(event.total);
        progress.value = event.loaded / event.total;
		}

xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
const formData = new FormData(form);
xhr.send(formData);
});














/*const xhr = new XMLHttpRequest();
form.addEventListener('click', (e) => {
	e.preventDefault();
    xhr.upload.onprogress = function(file) {
    	
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
	};

	xhr.response = 'json';
	xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
	xhr.send(file);
});

*/











      /*  if(xhr.status === 0){
			progress.value = 0.1;
		}else if(xhr.status === 1){
			progress.value = 0.3;
		}else if(xhr.status === 2){
			progress.value = 0.6;
		}else if(xhr.status === 3){
			progress.value = 0.9;
		}else if(xhr.status === 4){
			progress.value = 1.0;
		};*/