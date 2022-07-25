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
     let messageTime = document.querySelector('.message__time');

     let date = new Date();
     let dateHours = date.getHours();
     let dateMinutes = date.getMinutes();
     messageTime.textContent = `${dateHours} : ${dateMinutes}`;
     console.log(messageTime.textContent)
    
	 
     let messageText = document.querySelector('.message__text');
     messageText = chatWidgetInput.value;
    };


 const chatWidgetInput = document.querySelector('.chat-widget__input');



 chatWidgetInput.addEventListener('keydown', function(e) {
    if(e.keyCode === 13){
        enterFunc();
    };


     if(!chatWidgetInput.checkValidity()){
        alert('Напишите нам что-нибудь!');
     }

//chatWidgetInput.value.reset();
})
