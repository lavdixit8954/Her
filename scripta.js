// Select elements
const slider = document.querySelector('.slider');
const items = document.querySelectorAll('.item');
let currentIndex = 0;

// Function to show the next slide
function showNextSlide() {
  currentIndex = (currentIndex + 1) % items.length; // Loop back to the start
  const offset = currentIndex * -100; // Calculate offset
  slider.style.transform = `translateX(${offset}%)`;
}

// Add click event to change photo on click
slider.addEventListener('click', showNextSlide);

// Auto-slide every 7 seconds
setInterval(showNextSlide, 7000);
