const signinForm = document.getElementById('signin__form');
const userID = document.getElementById('user_id');
const welcome = document.getElementById('welcome');
const button = document.getElementById('signin__btn');
const signin = document.getElementById('signin');


function welcomeUser(){
	signinForm.classList.add('welcome');
	welcome.classList.add('welcome_active');
}


button.addEventListener('click', () => {
  signinForm.addEventListener('submit', (e) => {
	e.preventDefault();
	 const xhr = new XMLHttpRequest();
	 xhr.responseType = 'json';

	 xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
     const formData = new FormData(signinForm);
	 
	 xhr.send(formData);


	 xhr.addEventListener('load', () => {
	 	
	 		let responseServ = xhr.response;
	 		
	 		console.log(responseServ)

	 		if(responseServ.success) {
	 			userID.textContent = responseServ.user_id; 
	 			localStorage.setItem('user_id', responseServ.user_id);

	 			welcomeUser();

	 		} else{
	 			alert('Неверный логин/пароль');
	 		}
	 	signinForm.reset();
	 });
   })
});

window.addEventListener('load', () => {
	if(localStorage.getItem){
		userID.textContent = localStorage.getItem('user_id');

		welcomeUser();
	}
})