const xhr = new XMLHttpRequest();
const loader = document.getElementById('loader');
const items = document.getElementById('items');


xhr.addEventListener('readystatechange', () => {
	if(xhr.readyState === xhr.DONE){
			
		//ответ сервера
		let answer = JSON.parse(xhr.responseText);
		let newItem = answer.response.Valute;
		let newItems = Object.keys(answer.response.Valute).length;


      //let code = document.querySelector('.item__code');	
      //let value = document.querySelector('.item__value');


		//создаём необходимое число валют-элементов
		for(let i = 0; i < newItems; i++){
			items.insertAdjacentHTML('beforeend',
			 `<div class="item__code">${Object.entries(newItem)[i][0]}</div><div class="item__value">${Object.values(newItem)[i].Value}</div><div class="item__currency">руб.</div>`);
		}
        

		if(xhr.status === 200 ){
			loader.classList.remove('loader_active');
		}
	
	}
});

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');

xhr.send();


