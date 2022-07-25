const interestCheck = Array.from(document.querySelectorAll('.interests_active'));
//const interestCheck = document.querySelector('.interests_main')
console.log(interestCheck)
console.log(interestCheck.getComputedStyle);
//let children = 

 
for(const check of interestCheck){

check.addEventListener('change', (el) => {
if(check.checked){
	
    //let active = el.querySelector('.checked');
		
			console.log('получилось2')
			active.children.checked = true;
			
		};
			
			
			
	});

}
