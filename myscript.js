console.log('hello')

// TOP MENU ANIMATION
// Play animation only first time page gets loaded

// document.addEventListener("DOMContentLoaded", function(event) {
//   if (!sessionStorage.getItem("hasVisited") && window.location.href.includes("portfolio.html")) {
//     // If this is the user's first visit to portfolio.html, add the "fadeInBottom" class to the .topnav element
//     document.getElementsByClassName("topnav")[0].classList.add("fadeInBottom");
//     // Set a flag in session storage to remember the visit
//     sessionStorage.setItem("hasVisited", true);
//   }
// });



// HAMBURGER MENU ICON
// Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon

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



// SCROLL UP ANIMATION TO THE LANDING PAGE TOP

document.addEventListener("DOMContentLoaded", function(event) {

  // Scroll back to the top of the page with an ease-out animation when the back to top button is clicked
  document.getElementById("back-top").addEventListener("click", function(event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth", duration: 2000});
  });
});



//SCROLLS TO THE TOP OF PROJECTS RATHER THAN ALL THE WAY TO THE TOP OF THE WEBSITE
// document.addEventListener("DOMContentLoaded", function(event) {

//   // Scroll back to the top of the page with an ease-out animation when the back to top button is clicked
//   document.getElementById("back-top").addEventListener("click", function(event) {
//     event.preventDefault();
//     var gallery = document.getElementById("gallery");
//     gallery.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest", duration: 2000 });
//   });
// });




