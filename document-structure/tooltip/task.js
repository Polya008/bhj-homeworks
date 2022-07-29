const tooltips = Array.from(document.querySelectorAll('.has-tooltip'));

console.log(tooltips);

let tooltipNew = document.createElement('div');

for(let tooltip of tooltips){
	tooltip.addEventListener('click', () => {
        tooltip.insertBefore(tooltipNew, null);
		tooltipNew.append(tooltip.title);
		tooltipNew.classList.add('tooltip');
        tooltipNew.classList.add('tooltip_active');
        //tooltipNew.style = "left: 0; top: 0";
	});
};