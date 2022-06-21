const fontSmall = document.querySelector('.font-size_small');
const fontBig = document.querySelector('.font-size_big');
const fontNormal = document.querySelector('.font-size_active');
const text =  document.querySelector('.book__content');
const fonts = document.querySelectorAll('.font-size');
const allFonts = Array.from(document.querySelectorAll('.font-size'));
const control = document.querySelector('.book__control_font-size')

console.log(control);
console.log(text);


/*здесь всё работает почти хорошо, но код дублируется
fontSmall.addEventListener('click', (el) => {
let activeIndex = allFonts.findIndex((item) => item.classList.contains('font-size_active'));
console.log(activeIndex);
  allFonts[activeIndex].classList.remove('font-size_active');
  fontSmall.classList.add('font-size_active');
  text.classList.add('book_fs-small');
  el.preventDefault();
});



fontBig.addEventListener('click', (el) => {
  let activeIndex = allFonts.findIndex((item) => item.classList.contains('font-size_active'));
  console.log(activeIndex);
  allFonts[activeIndex].classList.remove('font-size_active');
  fontBig.classList.add('font-size_active');
  text.classList.add('book_fs-big');
  el.preventDefault();
});*/

allFonts.forEach(elem => {

elem.addEventListener('click', (event) => {
  event.preventDefault();
console.log('done!!!!!')

  let activeIndex = allFonts.findIndex((item) => item.classList.contains('font-size_active'));

  allFonts[activeIndex].classList.remove('font-size_active');
  elem.classList.add('font-size_active');

      if(elem.classList.contains('font-size_small')){
      text.classList.add('book_fs-small');
    
   } else if(elem.classList.contains('font-size_big')){
      text.classList.add('book_fs-big');
   }

   else {
    text.classList.remove('book_fs-big');
    text.classList.remove('book_fs-small');
   }

});
 })