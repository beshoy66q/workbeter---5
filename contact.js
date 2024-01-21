// Function to set up the animation
const setupAnimation = () => {
    // Apply animation to each .zzz element
    const zzzElements = document.querySelectorAll('.zzz');
    zzzElements.forEach((zzz, index) => {
      const delay = index * 0.5; // Adjust delay as needed
      zzz.style.animation = `zzz 2s ease-out infinite ${delay}s`;
    });
  };

  // Start the animation when the DOM is ready
  document.addEventListener('DOMContentLoaded', setupAnimation);

  
  // Get the <a> element by its class
  var toggleLink = document.querySelector('.dropdown-parent');

  // Add a click event listener to the <a> element
  toggleLink.addEventListener('click', function() {
    // Toggle the "clicked" class on the <a> element
    this.classList.toggle('clicked');
  });