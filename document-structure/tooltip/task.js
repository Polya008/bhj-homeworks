const tooltips = Array.from(document.querySelectorAll('.has-tooltip'));

console.log(tooltips);

let tooltipNew = document.createElement('div');

for(let tooltip of tooltips){
	tooltip.addEventListener('click', (e) => {
		e.preventDefault();
        tooltip.insertBefore(tooltipNew, null);
		tooltipNew.append(tooltip.title);
		tooltipNew.classList.add('tooltip');
        tooltipNew.classList.add('tooltip_active');
        //tooltipNew.classList.toggle('tooltip_active');
        //tooltipNew.style = "left: 0; top: 0";



//положение подсказки
        //let coords = tooltip.getBoundingClientRect();
        //let {left , top}  = coords.left + 2;

        let {left , top}  = tooltip.getBoundingClientRect();
        	if (left < 0) {
        		left = 0;
        	}else{
        		left += 5;
        	}

         
      		if (top < 0) { 
              top += 5;
      }

});
};

//клик в другом месте страницы
  window.addEventListener('click', (e) =>  {

      if(!e.classList.contains('has-tooltip')) {
      	console.log('опа')
       // tooltipNew.remove();
        //tooltipNew = null;
      };

	});

