function handleMouseMove(event) {
    const navLink = event.target;
    const boundingRect = navLink.getBoundingClientRect();
    
    // Calculate the distance from the mouse pointer to the center of the link
    const offsetX = event.clientX - boundingRect.left - boundingRect.width / 2;
    const offsetY = event.clientY - boundingRect.top - boundingRect.height / 2;

    // Calculate the new background position based on the distance
    const backgroundPosX = 50 + offsetX / 10; // You can adjust the sensitivity here
    const backgroundPosY = 50 + offsetY / 10; // You can adjust the sensitivity here

    // Apply the new background position
    navLink.style.backgroundPosition = `${backgroundPosX}% ${backgroundPosY}%`;
}

// Reset background position when the mouse leaves the link
function resetBackgroundPosition(event) {
    const navLink = event.target;
    navLink.style.backgroundPosition = '50% 50%';
}

// Add mouseleave event listeners to reset background position
const menuNav = document.getElementById('menuNav');
const navLinks = menuNav.getElementsByTagName('a');

for (const navLink of navLinks) {
    navLink.addEventListener('mouseleave', resetBackgroundPosition);
}
