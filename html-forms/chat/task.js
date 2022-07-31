const widget = document.querySelector('.chat-widget');
console.log(widget);


widget.addEventListener('click', () => {
	widget.classList.add('chat-widget_active');
});

function enterFunc() {
	const messages = document.getElementById('chat-widget__messages');


     messages.innerHTML  +=                 
	        ` <div class="message message_client">
                <div class="message__time"></div>
                <div class="message__text"></div>
             </div> `

//время отправки
   let messageTime = document.querySelector('.message__time');
        let date = new Date();
        let dateHours = date.getHours();
         if(dateHours < 10){
                dateHours = `0${dateHours}`;
            }
        let dateMinutes = date.getMinutes();
            if(dateMinutes < 10){
                dateMinutes = `0${dateMinutes}`;
            }
        messageTime.textContent = `${dateHours} : ${dateMinutes}`;
        console.log(messageTime.textContent);
    
    
   let messageText = document.querySelector('.message__text');
     messageText.textContent = chatWidgetInput.value;

   //e.target.reset();
     chatWidgetInput.value = '';
     //messageTime.textContent = '';
     //messageText.textContent = '';




//сразу добавляем сообщение от чат-бота

       if(!messages.classList.contains('message_client')){
        messages.innerHTML  +=                 
            `<div class="message">
                <div class="message__time"></div>
                <div class="message__text"></div>
                        </div>`

        let dateRobot = new Date();
        let dateHoursRobot = dateRobot.getHours();
        let dateMinutesRobot = dateRobot.getMinutes();
            if(dateMinutesRobot < 10){
                dateMinutesRobot = `0${dateMinutesRobot}`
            }
        messageTime.textContent = `${dateHoursRobot} : ${dateMinutesRobot}`;


        let robotAnswer = ['Добрый день! До свидания!', 'Вот вообще не интересно', 'Кто вы такой? Давайте, до свидания!', 'И что, вы сами не можете решить проблему?!', 'Это снова вы?!', 'Простите, все операторы заняты, не пишите нам больше!'];
        messageText.textContent = robotAnswer[Math.floor(Math.random() * robotAnswer.length)];
        }

    };


 const chatWidgetInput = document.querySelector('.chat-widget__input');



 chatWidgetInput.addEventListener('keydown', function(e) {

    if(e.keyCode === 13){
        enterFunc();
    };
     if(!chatWidgetInput.checkValidity()){
        alert('Напишите нам что-нибудь!');
     }



//chatWidgetInput.value = '';
})


