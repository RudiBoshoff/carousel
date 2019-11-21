var slideIndex = 1;
showSlides(slideIndex);

// Next and Previous
document.getElementById("left").onclick = function() {
  plusSlides(-1);
};
document.getElementById("right").onclick = function() {
  plusSlides(1);
};

// Dot navigation
document.getElementById("one").onclick = function() {
  currentSlide(1);
};
document.getElementById("two").onclick = function() {
  currentSlide(2);
};
document.getElementById("three").onclick = function() {
  currentSlide(3);
};

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  console.log(slides);
  var dots = document.getElementsByClassName("slide__dot");

  // Go back to start if n exceeds slide count
  if (n > slides.length) {
    slideIndex = 1;
  }

  // Go to last slide if previous is clicked on first slide
  if (n < 1) {
    slideIndex = slides.length;
  }

  // Set each slide to display:none
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Remove active className from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" slide__dot--active", "");
  }

  // Set currentSlide to display block
  slides[slideIndex - 1].style.display = "block";

  // Set current dot to active
  dots[slideIndex - 1].className += " slide__dot--active";
}
