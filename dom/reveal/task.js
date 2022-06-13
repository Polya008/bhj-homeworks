const reveal = document.querySelector(".reveal");

function showReveal(el) {
  const { top, bottom } = el.getBoundingClientRect();
  console.log(el);
  if (bottom < 0){
    console.log(top, bottom);
    return false;
  } 
  
  if(top > window.innerHeight){
    console.log(top, bottom);
    return false;
  }
  
  if(el){
    console.log(top, bottom);
    el.classList.add("reveal_active");
  }
  
}


//reveal.addEventListener("scroll", showReveal)


//window.addEventListener('scroll', showReveal);
 setInterval(showReveal, 1000);