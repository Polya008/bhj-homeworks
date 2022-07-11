const text = document.querySelector('.book__content');
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

    let activeIndex = allFonts.findIndex((item) => item.classList.contains('font-size_active'));

    allFonts[activeIndex].classList.remove('font-size_active');
    elem.classList.add('font-size_active');

    text.classList.remove('book_fs-big');
    text.classList.remove('book_fs-small');

    if (elem.classList.contains('font-size_small')) {
      text.classList.add('book_fs-small');

    } else if (elem.classList.contains('font-size_big')) {
      text.classList.add('book_fs-big');
    }
  });
});


const color = Array.from(document.querySelectorAll('.color'));
console.log(color);



color.forEach(elem => {

  let activeColor = color.findIndex((item) => item.classList.contains('color_active'));

  //цвет текста
  if (elem.closest('.book__control_color')) {
    elem.addEventListener('click', (event) => {
      event.preventDefault();


      color[activeColor].classList.remove('color_active');
      elem.classList.add('color_active');

      if (elem.classList.contains('text_color_gray')) {
        text.classList.remove('book_color-black');
        text.classList.remove('book_color-whitesmoke');
        text.classList.add('book_color-gray');

      } else if (elem.classList.contains('text_color_whitesmoke')) {
        text.classList.remove('book_color-black');
        text.classList.remove('book_color-gray');
        text.classList.add('book_color-whitesmoke');

      } else {
        text.classList.remove('book_color-whitesmoke');
        text.classList.remove('book_color-gray');
        text.classList.add('book_color-black');
      }

    });
  }
});

//цвет фона
color.forEach(elem => {

  let activeColor = color.findIndex((item) => item.classList.contains('color_active'));
  if (elem.closest('.book__control_background')) {
    elem.addEventListener('click', (event) => {
      event.preventDefault();


      color[activeColor].classList.remove('color_active');
      elem.classList.add('color_active');

      if (elem.classList.contains('bg_color_black')) {
        text.classList.remove('book_bg-gray');
        text.classList.remove('book_bg-white');
        text.classList.add('book_bg-black');

      } else if (elem.classList.contains('bg_color_white')) {
        text.classList.remove('book_bg-black');
        text.classList.remove('book_bg-gray');
        text.classList.add('book_bg-white');
        
      } else {
        text.classList.remove('book_bg-black');
        text.classList.remove('book_bg-white');
        text.classList.add('book_bg-gray');
      }

    });
  }

});