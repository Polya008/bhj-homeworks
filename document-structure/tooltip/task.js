const tooltips = Array.from(document.querySelectorAll('.has-tooltip'));

const createElement = (title, top, left) => {
  let tooltipNew = document.createElement('div');
  tooltipNew.textContent = title;
  tooltipNew.classList.add('tooltip');
  tooltipNew.classList.toggle('tooltip_active');
  return tooltipNew;
}



const showTooltip = (event) => {
  event.preventDefault();

  let tooltip = document.querySelector('.tooltip');

  let {left , top}  = tooltip.getBoundingClientRect();
  tooltipNew.style.left = left + 'px';
  tooltipNew.style.top = (top + 20) + 'px';


}





tooltips.forEach((tooltip) => {
  tooltip.addEventListener('click', showTooltip);
})

/*
let tooltipNew = document.createElement('div');
//let {left , top}  = tooltip.getBoundingClientRect();

for(let tooltip of tooltips){
	tooltip.addEventListener('click', (e) => {
		e.preventDefault();
    tooltip.insertBefore(tooltipNew, null);
    //tooltipNew.insertAdjacentHTML('beforeend', )
		tooltipNew.append(tooltip.title);;
		tooltipNew.classList.add('tooltip');
    tooltipNew.classList.toggle('tooltip_active');

    tooltipNew.style.left = left + 'px';
    tooltipNew.style.top = top + 'px';



if(e.currentTarget === tooltip){

}
//положение подсказки
        //let coords = tooltip.getBoundingClientRect();
        //let {left , top}  = coords;

        let {left , top}  = tooltip.getBoundingClientRect();
*/

/*
//клик в другом месте страницы
  window.addEventListener('click', (e) =>  {
      if(!e.target.classList.contains('has-tooltip')) {  //+ в условие ( || e.target!==tooltip)
       tooltipNew.classList.remove('tooltip_active');
       tooltipNew.remove();
       tooltipNew.textContent = '';
      }else{
        tooltipNew = e.currentTarget;
      }
*/

//	});
//});
//};
