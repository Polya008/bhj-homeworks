const signinForm = document.getElementById('signin__form');
const userID = document.getElementById('user_id');
const welcome = document.getElementById('welcome');
const button = document.getElementById('signin__btn');
const signin = document.getElementById('signin');



button.addEventListener('click', () => {
  signinForm.addEventListener('submit', (e) => {
	e.preventDefault();
	 const xhr = new XMLHttpRequest();
	 xhr.responseType = 'json';

	 xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
     const formData = new FormData(signinForm);
	 
	 xhr.send(formData);



	 xhr.addEventListener('readystatechange', () => {
	 	if(xhr.readyState === xhr.DONE){
	 		let responseServ = xhr.response;
	 		
	 		console.log(responseServ)

	 		if(responseServ.success) {
	 			signin.classList.remove('signin_active');
	 			welcome.classList.add('welcome_active');
	 			userID.textContent = responseServ.user_id; 
	 			localStorage.setItem('user_id', responseServ.user_id);
	 		} else{
	 			alert('Неверный логин/пароль');
	 		}
	 	}
	 });
   })
});

window.addEventListener('load', () => {
	if(localStorage.getItem){
		signin.classList.remove('signin_active');
		welcome.classList.add('welcome_active');
		userID.textContent = localStorage.getItem('user_id');
	}
})