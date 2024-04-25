// Array containing the paths to the background images
const backgroundImages = [
    './assets/back-original.jpg', 
    './assets/couple2.jpg', 
    './assets/couple3.jpg'
];

// Current index of the displayed background image
let currentIndex = 0;

// Function to change the background image
function changeBackground(direction) {
    // If direction is 'next', increment currentIndex; if 'prev', decrement it
    if (direction === 'next') {
        currentIndex = (currentIndex + 1) % backgroundImages.length;
    } else if (direction === 'prev') {
        currentIndex = (currentIndex - 1 + backgroundImages.length) % backgroundImages.length;
    }
    
    // Get the container element
    const container = document.querySelector('.container-fluid.background-image');
    
    // Set the background image of the container
    container.style.backgroundImage = `url('${backgroundImages[currentIndex]}')`;
}

// Add event listeners to the left and right buttons
document.querySelector('.btn-primary[data-direction="prev"]').addEventListener('click', function() {
    changeBackground('prev');
});

document.querySelector('.btn-primary[data-direction="next"]').addEventListener('click', function() {
    changeBackground('next');
});

// Automatic sliding functionality
setInterval(function() {
    changeBackground('next');
}, 3000); // Slide every 3 seconds
