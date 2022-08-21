const tooltips = document.querySelectorAll('.has-tooltip');

for(let item of tooltips){
	item.addEventListener('click', (e) => {
		e.preventDefault();
    const tooltipActive = document.querySelector('.tooltip_active');
        if (tooltipActive !== null) {
           if (event.target.title == tooltipActive.textContent) {
              tooltipActive.remove();
              return false;
            } 
            tooltipActive.remove();
        }


        const element = event.target;
        const tooltipNew = document.createElement('div');
        tooltipNew.className = "tooltip tooltip_active";
        let {left , top}  = item.getBoundingClientRect();
          tooltipNew.style.left = left + 'px';
          tooltipNew.style.top = (top + 20) + 'px';
        tooltipNew.textContent = element.title;
        element.insertAdjacentHTML('afterend', tooltipNew.outerHTML);       
        return false;
        });

    }
  