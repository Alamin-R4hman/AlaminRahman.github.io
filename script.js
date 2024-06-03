const header = document.querySelector("header");
window.addEventListener("scroll", function(){
  header.classList.toggle("sticky", window.scrollY > 90)
});

//Menu

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
  menu.classList.toggle('bx-x')
  navlist.classList.toggle('open')
};

window.onscroll = () => {
  menu.classList.remove('bx-x')
  navlist.classList.remove('open')
}

// Ensure menu icon is always visible on load if screen width is <= 1080px
document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth <= 1080) {
    menu.style.display = 'block';
  }
});

//Scroll Reveal

ScrollReveal({
  distance: '80px',
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal('.hero-text, .skills-content, mid-left', {origin: 'left'});
ScrollReveal().reveal('.hero-img, mid-right', {origin: 'right'});
ScrollReveal().reveal('.scroll, portfolio-btn', {origin: 'bottom'});
ScrollReveal().reveal('.mid-text', {origin: 'top'});
ScrollReveal().reveal('.portfolio-content, contact-content', {origin: 'right'});

var type = new Typed(".input-js", {
  strings:["Junior Developer.", "Software Engineer.", "Full Stack Developer."],
  typeSpeed: 80,
  backSpeed: 70,
  loop: true
});


//Step 1: Defining Variables
//Here we declare a variable named typedInstance and set it to null. This variable will be used to keep track of the Typed.js instance.
let typedInstance = null;

//Step 2: Creating a Function to Show the Modal
//We define a function named showModal which contains the logic to display the modal when called.
function showModal() {

  //Step 3: Showing the Modal
  var modal = document.querySelector('#myModal');
  var modalContent = document.querySelector('.modal-content');

  //Show the modal with transition
  //We select the modal and its content using document.querySelector(). Then we set the display property of the modal to flex, making it visible.
  modal.style.display = 'flex';

  //Step 4: Adding a CSS Class for Transition
  //We use setTimeout() to add a small delay before adding the show class. Adding the show class triggers CSS transitions, creating a smooth animation to show the modal and its content.
  setTimeout(function() {
    modal.classList.add('show');
    modalContent.classList.add('show');
  }, 10); // Small delay to ensure CSS transition runs

  //Step 5: Resetting and Initializing Typed.js
  //We reset the content of the element with class modal-input-js to an empty string.
  document.querySelector('.modal-input-js').textContent = '';

  //If there's an existing Typed.js instance (typedInstance), we destroy it to prevent multiple instances running simultaneously.
  if (typedInstance) {
    typedInstance.destroy();
  }

  //We then create a new Typed.js instance and assign it to typedInstance. This instance creates the typing effect inside the modal content.
  typedInstance = new Typed(".modal-input-js", {
    strings: ["<span class='white-text'>A little bit more</span> <span class='highlighted-text'>about me</span>"],
    typeSpeed: 70,
    loop: false
  });
}

//Step 6: Event Listeners
//We attach event listeners to the "click here!" button (modal-btn-js) and the "About" link (about-link) in the navbar.
//When either of these elements is clicked, the showModal function is called to display the modal.
//Additionally, an event listener is attached to the close button inside the modal to handle modal closure.
document.getElementById("modal-btn-js").addEventListener('click', showModal);
document.getElementById("about-link").addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default anchor behavior
  showModal();
});

//Step 7: Closing the Modal
document.querySelector('.close-modal').addEventListener('click', function() {
  var modal = document.querySelector('.modal');
  var modalContent = document.querySelector('.modal-content');

  //We select the modal and its content. We remove the show class from both elements, triggering CSS transitions to hide the modal and its content.
  modal.classList.remove('show');
  modalContent.classList.remove('show');

  setTimeout(function() {
    modal.style.display = 'none';
  }, 500); // Match this duration to the CSS transition duration
});

/*
Summary
The JavaScript code controls the behavior of the modal:

It defines a function to show the modal and initializes the Typed.js instance for the typing effect.

Event listeners are attached to the "click here!" button, the "About" link, and the close button to trigger the display and closure of the modal.

CSS transitions are used to animate the modal's appearance and disappearance, providing a smooth user experience.
*/

//Light and Dark Theme

// JavaScript for toggling themes
/*const bulbIcon = document.getElementById("bulb-icon");
const body = document.body;
const darkImage = document.getElementById("dark-image");
const lightImage = document.getElementById("light-image");

bulbIcon.addEventListener("click", function () {
    body.classList.toggle("light-theme");
    
    if (body.classList.contains("light-theme")) {
        darkImage.classList.add("hidden");
        lightImage.classList.add("visible");
        lightImage.classList.remove("hidden");
    } else {
        darkImage.classList.remove("hidden");
        lightImage.classList.remove("visible");
        lightImage.classList.add("hidden");
    }
});*/

var bulb = document.getElementById("on");
var image = document.getElementById("dark-image")

bulb.onclick = function(){
  document.body.classList.toggle("light-theme");
  if(document.body.classList.contains("light-theme")){
    bulb.src = "./assests/moon.png";
    image.src = "./assests/light-theme.png"
  }else{
    bulb.src = "./assests/sun.png";
    image.src = "./assests/dark-theme.png";
  }
}