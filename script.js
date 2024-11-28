// Select all required elements
const circles = document.querySelectorAll('.circle');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentActive = 1;

// Function to update the circles and buttons
function update() {
    // Loop through the circles to update active class
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    // Enable or disable buttons based on currentActive value
    prevButton.disabled = currentActive === 1;
    nextButton.disabled = currentActive === circles.length;
}

// Add event listener for Next button
nextButton.addEventListener('click', () => {
    if (currentActive < circles.length) {
        currentActive++;
        update();
    }
});

// Add event listener for Prev button
prevButton.addEventListener('click', () => {
    if (currentActive > 1) {
        currentActive--;
        update();
    }
});

// Initial state setup
update();
