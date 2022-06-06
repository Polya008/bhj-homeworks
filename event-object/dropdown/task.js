const dropdownValues = Array.from(document.querySelectorAll('.dropdown__value'));
const dropdownList = document.querySelector('.dropdown__list');
const dropdownItem = Array.from(document.querySelectorAll('.dropdown__item'));
const dropdownLink = Array.from(document.querySelectorAll('.dropdown__link'));





/*dropdownValues.onclick = function(){
 dropdownList.classList.toggle('dropdown__list_active');
}*/


function clickValues() {
   for(let i = 0; i < dropdownValues.length; i++){
    dropdownValues[i].closest('.dropdown');

    let parent = dropdownValues[i].closest('.dropdown');

      if(parentDropdownValue[i]){
       dropdownList.classList.toggle('dropdown__list_active');
     }

     dropdownValues[i].addEventListener('click', (event) => clickValues);
  }



}


//dropdownValues.addEventListener('click', (event) => clickValues);


dropdownItem.onclick = function() {
  for(let i = 0; i < dropdownItem.length; i++){
  //dropdownLink.forEach((item) => item.textContent )
    if(dropdownLink.closest('.dropdown__item'))
  dropdownItem[i].textContent = dropdownValue.textContent;
  }
  //return false;
}