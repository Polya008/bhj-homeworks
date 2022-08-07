
//открываем окно
const widget = document.querySelector('.chat-widget');
widget.addEventListener('click', () => {
	widget.classList.add('chat-widget_active');
});


//ввод сообщения клиента
function enterFunc() {
    let chatMessages = [];
	const messages = document.getElementById('chat-widget__messages');

//время отправки
   let messageTime = document.querySelectorAll('.message__time');
        let date = new Date();
        let dateHours = date.getHours();
         if(dateHours < 10){
                dateHours = `0${dateHours}`;
            }
        let dateMinutes = date.getMinutes();
            if(dateMinutes < 10){
                dateMinutes = `0${dateMinutes}`;
            }


     messages.innerHTML  +=                 
	        ` <div class="message message_client">
                <div class="message__time">${dateHours} : ${dateMinutes}</div>
                <div class="message__text">${chatWidgetInput.value}</div>
             </div> `

    
   let messageText = document.querySelector('.message__text');
   chatWidgetInput.value = '';

     
//сразу добавляем сообщение от чат-бота

        let dateRobot = new Date();
        let dateHoursRobot = dateRobot.getHours();
        let dateMinutesRobot = dateRobot.getMinutes();
            if(dateMinutesRobot < 10){
                dateMinutesRobot = `0${dateMinutesRobot}`
            }


        let robotAnswer = ['Добрый день! До свидания!', 'Вот вообще не интересно', 'Кто вы такой? Давайте, до свидания!', 'И что, вы сами не можете решить проблему?!', 'Это снова вы?!', 'Простите, все операторы заняты, не пишите нам больше!'];

        if(!messages.classList.contains('message_client')){
        messages.innerHTML  +=                 
            `<div class="message">
                <div class="message__time">${dateHoursRobot} : ${dateMinutesRobot}</div>
                <div class="message__text">${robotAnswer[Math.floor(Math.random() * robotAnswer.length)]}</div>
                        </div>`
        }

    };


 const chatWidgetInput = document.querySelector('.chat-widget__input');

 chatWidgetInput.addEventListener('keyup', (e) => {

    if(e.key === 'Enter' && chatWidgetInput !== ''){
        enterFunc();
    };
     if(!chatWidgetInput.checkValidity()){
        alert('Напишите нам что-нибудь!');
     }
})


