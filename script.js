 // Toggle for mobile nav
  function myFunction() {
    const nav = document.getElementById("myTopnav");
    nav.classList.toggle("responsive");
  }

  // Highlight active page
  const links = document.querySelectorAll('.topnav a');
  const currentPage = window.location.pathname.split('/').pop();

  links.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });

// Slideshow logic
let slideIndex = 1;

// Move to next/previous slide
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Move to specific slide
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Show the right slide
function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  // Prevent error if slides aren't on the page
  if (slides.length === 0) return;

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Run only after full page has loaded
window.onload = function() {
  showSlides(slideIndex);
};
