let slideIndex = 0;
const slides = document.querySelectorAll('.slides');

function showSlides() {
  slides.forEach(slide => slide.style.display = 'none');
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].style.display = 'block';
}

slides[0].style.display = 'block'; // Show first image
setInterval(showSlides, 3000); // Rotate every 3 sec


function myFunction() {
  var x = document.querySelector(".topnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
