const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();

console.log(xhr.responseText);


const pollTitle = document.getElementById('poll__title');
const pollAnswer = document.getElementById('poll__answers');

xhr.responseType = 'json';
 
xhr.addEventListener('readystatechange', () => {
	let responseServ = xhr.response;

	if(xhr.readyState === xhr.DONE){
		console.log(responseServ);
		pollTitle.textContent = responseServ.data.title;
		for(let ans of responseServ.data.answers){
		 pollAnswer.insertAdjacentHTML('beforeend', `<button class="poll__answer">${ans}</button>`)
		}
	};
});

pollAnswer.addEventListener('click', () => {
	alert('Спасибо!Ваш голос засчитан!')
})