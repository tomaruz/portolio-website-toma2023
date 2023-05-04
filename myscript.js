console.log('hello')

  // GALLERY FADE IN ANIMATION

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("show");
          observer.unobserve(entry.target); //stop observing the element once it's visible, so animation runs only once
        }, 100); // add 0.1 second delay before fading in the element
      }
    });
  }, { 
    threshold: 0.4, // fade in when element is 40% up the screen
    once: true 
  });
  
  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach((el) => observer.observe(el));
