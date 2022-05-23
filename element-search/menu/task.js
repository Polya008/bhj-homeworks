const menuLink = Array.from(document.querySelectorAll(".menu__link"));
//const menu

for (let i = 0; i < menuLink.length; i++) {
 	menuLink[i].onclick = function () {
    let menuItem = menuLink[i].closest(".menu__item");
    const menuSub = menuItem.querySelector('.menu_sub');
 	      
        if(menuSub){  
   		menuSub.classList.toggle("menu_active");
   		return false;
        }
	}
}











