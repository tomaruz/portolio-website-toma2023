console.log('hello')



function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  // GALLERY FADE IN ANIMATION

  // add the fadeInTop class to project-container when it comes into view 

const observer = new IntersectionObserver(entries => {
entries.forEach(entry =>{
  if(entry.isIntersecting){
    document.querySelectorAll(".animated")[0].classList.add("fadeInTop")
  }
})
})

observer.observe(document.querySelector(".project-container"));