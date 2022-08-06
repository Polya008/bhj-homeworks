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
    tooltipNew.style.left = left + 'px';
    tooltipNew.style.top = top + 'px';



if(e.currentTarget === tooltip){

}
//положение подсказки
        //let coords = tooltip.getBoundingClientRect();
        //let {left , top}  = coords;

        let {left , top}  = tooltip.getBoundingClientRect();




//клик в другом месте страницы
  window.addEventListener('click', (e) =>  {
      if(!e.target.classList.contains('has-tooltip')) {  //+ в условие ( || e.target!==tooltip)
       tooltipNew.classList.remove('tooltip_active');
       tooltipNew.remove();
       tooltipNew.textContent = '';
      }else{
        tooltipNew = e.currentTarget;
      }


	});





});
};



