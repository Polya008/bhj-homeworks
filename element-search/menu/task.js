const link = document.querySelectorAll('.menu__link');

for (let i = 0; i < link.length; i++) {
	link.onclick = function(){
		const parent = link.closest('.menu__item');
		const oldClass = parent.className;
		oldClass += menu_active;


		const sub = document.querySelectorAll('.menu_sub');
		if(parent.includes(sub)){
			function(){
				return false;
			}
		}
	}
}