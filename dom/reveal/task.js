const reveal = Array.from(document.querySelectorAll('.reveal'));

function showReveal() {
for (const rev of reveal){
  const { top, bottom } = rev.getBoundingClientRect();

  if (bottom < 0 || top > window.innerHeight){
    console.log(top, bottom);
    rev.classList.remove("reveal_active");
  } 
  
  if(top < window.innerHeight && bottom > 0){
    console.log(top, bottom);
    rev.classList.add("reveal_active");
  }
  
  
 }
}

window.addEventListener("scroll", showReveal);
