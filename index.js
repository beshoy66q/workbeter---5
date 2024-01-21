  // Get all elements with the class "img-box svg"
  const svgs = document.querySelectorAll('.img-box svg');

  // Function to add the animation property
  const addAnimation = (svg) => {
    svg.style.animation = 'moveUpDown 3s ease-in-out alternate infinite';
  };

  // Function to toggle the translateY transformation
  const toggleTranslateY = (svg) => {
    const currentTransform = svg.style.transform;
    const translateYValue = currentTransform.includes('translateY') ? 0 : -50;
    svg.style.transform = `translateY(${translateYValue}px)`;
  };

  // Function to set up the animation interval
  const startAnimation = () => {
    svgs.forEach(svg => {
      addAnimation(svg);
      setInterval(() => {
        toggleTranslateY(svg);
      }, 3000); // Change the interval (in milliseconds) to your desired duration
    });
  };

  // Start the animation
  startAnimation();

  // Hide and show the animation on click for the dropdown menu

  // Get the <a> element by its class
  var toggleLink = document.querySelector('.dropdown-parent');

  // Add a click event listener to the <a> element
  toggleLink.addEventListener('click', function() {
    // Toggle the "clicked" class on the <a> element
    this.classList.toggle('clicked');
  });