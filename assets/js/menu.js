// Smooth scrolling function
const scrollTo = (element, duration = 1000) => {
    const target = document.querySelector(element);
    const targetPosition = target.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;

    const smoothScroll = () => {
      const currentTime = Date.now();
      const timeElapsed = currentTime - startTime;
      const scrollStep = Math.min(distance, timeElapsed / duration * distance);
      window.scrollTo({
        top: startPosition + scrollStep,
        behavior: 'smooth'
      });

      if (timeElapsed < duration) {
        requestAnimationFrame(smoothScroll);
      }
    };

    const startTime = Date.now();
    requestAnimationFrame(smoothScroll);
  };

  // Add click event listener to the scroll down button
  const scrollDownButton = document.querySelector('.scroll-down-button');
  scrollDownButton.addEventListener('click', () => {
    scrollTo('#content');
  });