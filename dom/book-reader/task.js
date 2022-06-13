const fontSmall = document.querySelector('.font-size_small');
const fontBig = document.querySelector('.font-size_big');
const fontNormal = document.querySelector('.font-size_active');
const text =  document.querySelector('.book__content');
const fonts = Array.from(document.querySelectorAll('.font-size'));

console.log(fontSmall);
console.log(text);

fontSmall.addEventListener('click', () => {
let activeIndex = fonts.findIndex((item) => item.classList.contains('font-size_active'));
console.log(activeIndex);
  fonts[activeIndex].classList.remove('font-size_active');
  fontSmall.classList.add('font-size_active');
  text.classList.add('book_fs-small');
});



fontBig.addEventListener('click', () => {
  let activeIndex = fonts.findIndex((item) => item.classList.contains('font-size_active'));
  console.log(activeIndex);
  fonts[activeIndex].classList.remove('font-size_active');
  fontBig.classList.add('font-size_active');
  text.classList.add('book_fs-big');
});