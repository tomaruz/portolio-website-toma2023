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

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // stop observing the element once it's visible, so animation runs only once
      }
    });
  }, { once: true });
  
  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach((el) => observer.observe(el));
  



  // using GREENSOCK

  // gsap.utils.toArray('.project-container').forEach(box => {
  //   gsap.fromTo(box, {
  //       autoAlpha: 0, 
  //       y: 50
  //     }, {
  //     scrollTrigger: {
  //       trigger: box,
  //       once: true,
  //     },
  //     duration: 2, 
  //     autoAlpha: 1, 
  //     y: 0
  //   });
  // });