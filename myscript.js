console.log('hello')


  // GALLERY FADE IN ANIMATION

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("show");
          observer.unobserve(entry.target); //stop observing the element once it's visible, so animation runs only once
        }, 100); // add 0.2 second delay before fading in the element
      }
    });
  }, { 
    threshold: 0.5, // fade in when element is half up the screen
    once: true 
  });
  
  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach((el) => observer.observe(el));
