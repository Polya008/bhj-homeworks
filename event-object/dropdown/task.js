const dropdownValue = document.querySelector('.dropdown__value');
const allValue = document.querySelectorAll('.dropdown__value');
const allValueArr = Array.from(allValue);
const dropdownList = document.querySelector('.dropdown__list');
const dropdownItems = Array.from(document.querySelectorAll('.dropdown__item'));
//const dropdownLink = Array.from(document.querySelectorAll('.dropdown__link'));





function toggleClass(){
  dropdownList.classList.toggle('dropdown__list_active');
  }
dropdownValue.addEventListener('click', toggleClass);

function clickValues(event) {
  event.preventDefault();

dropdownList.classList.remove('dropdown__list_active');
dropdownValue.textContent = event.target.textContent;



allValue[i].textContent = event.target.textContent;
return false;
}




dropdownItems.forEach(elem => {
  elem.addEventListener('click', clickValues)
});