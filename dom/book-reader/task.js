const fontSmall = document.querySelector('.font-size_small');
const fontBig = document.querySelector('.font-size_big');
const fontNormal = document.querySelector('.font-size_active');
const text =  document.querySelector('.book__content');
const fonts = document.querySelectorAll('.font-size');
const allFonts = Array.from(document.querySelectorAll('.font-size'));
const control = document.querySelector('.book__control_font-size')

console.log(control);
console.log(text);


/*
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


control.addEventListener('click', (el) => {
  alert(hi);
  let activeIndex = allFonts.findIndex((item) => item.classList.contains('font-size_active'));
  allFonts[activeIndex].classList.remove('font-size_active');
  el.classList.add('font-size_active');
 

     if(el.classList.contains('font-size_small')){
      text.classList.add('book_fs-small');
      el.preventDefault();
    
   } else if(el.classList.contains('font-size_big')){
      text.classList.add('book_fs-big');
      el.preventDefault();
   }

})