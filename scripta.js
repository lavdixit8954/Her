const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slider .item');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

// Function to update the slider position
function updateSliderPosition() {
  const slideWidth = slides[0].clientWidth;
  slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Event listener for Next button
nextButton.addEventListener('click', () => {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; // Loop back to the first slide
  }
  updateSliderPosition();
});

// Event listener for Previous button
prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = slides.length - 1; // Loop back to the last slide
  }
  updateSliderPosition();
});

// Resize event listener to handle responsive layouts
window.addEventListener('resize', updateSliderPosition);
