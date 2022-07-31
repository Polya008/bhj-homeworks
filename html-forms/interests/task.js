const parents = Array.from(document.querySelectorAll('.interest__check'));

//находим 2 Ul
let parentBoxes = [];

parents.forEach(item => {
 if(!item.closest('.interests_active')) {
 	parentBoxes.push(item);
 }
});

//console.log(parentBoxes);



for(const check of parentBoxes){

	check.addEventListener('change', () => {


    let oneParent = check.closest('.interest');
    let child = oneParent.querySelector('.interests_active');
    let children = Array.from(child.querySelectorAll('input'));
    console.log(children)


    children.forEach(elem => {
     if(check.checked){
			elem.checked = true;
		}else{
			elem.checked = false;
		}
	})
				
				
				
		});


}
