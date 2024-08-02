
const icon = document.getElementById('icon');

// Add a click event listener to the image
icon.addEventListener('click', function() {
    // Check the current source and toggle it
    if (icon.src.includes('icon-plus.svg')) {
        icon.src = '../assets/images/icon-minus.svg';
    } else {
        icon.src = '../assets/images/icon-plus.svg';
    }
});