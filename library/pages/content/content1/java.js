// Function to update the main image when a thumbnail is clicked
function updateImage(thumbnail) {
    const mainImage = document.getElementById('mainImage');
    mainImage.src = thumbnail.src;
    mainImage.alt = thumbnail.alt;
}

// Event listeners for thumbnail cards
const thumbnailCards = document.querySelectorAll('.thumbnail-card');
thumbnailCards.forEach(card => {
    card.addEventListener('click', function() {
        thumbnailCards.forEach(innerCard => {
            innerCard.classList.remove('active');
        });
        this.classList.add('active');
        updateImage(this.querySelector('img')); // Update main image
    });
});


document.getElementById('backButton').addEventListener('click', function() {
    window.history.back();
});







// Activate neighboring thumbnail (left/right) based on navigation button click
function activateNeighbor(direction) {
    const thumbnails = Array.from(document.querySelectorAll('.thumbnail-card'));
    let currentActiveIndex = thumbnails.findIndex(thumb => thumb.classList.contains('active'));

    if (direction === 'left' && currentActiveIndex > 0) {
        currentActiveIndex--;
    } else if (direction === 'right' && currentActiveIndex < thumbnails.length - 1) {
        currentActiveIndex++;
    }

    const newActive = thumbnails[currentActiveIndex];
    newActive.click(); // Simulate click to activate and update the image

    // Center the active thumbnail
    const slider = document.querySelector('.thumbnail-slide');
    const scrollLeft = newActive.offsetLeft - slider.offsetWidth / 2 + newActive.offsetWidth / 2;
    slider.scrollLeft = scrollLeft;
}

// Drag-to-scroll functionality for the thumbnail slider
const slider = document.querySelector('.thumbnail-slide');
let isDragging = false;
let startPos = 0;
let scrollLeft = 0;

function startDrag(e) {
    isDragging = true;
    startPos = e.pageX || e.touches[0].pageX;
    scrollLeft = slider.scrollLeft;
}
function endDrag() {
    isDragging = false;
}
function doDrag(e) {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX || e.touches[0].pageX;
    const dist = (x - startPos);
    slider.scrollLeft = scrollLeft - dist;
}

// Mouse events for desktop
slider.addEventListener('mousedown', startDrag);
slider.addEventListener('mouseup', endDrag);
slider.addEventListener('mouseleave', endDrag);
slider.addEventListener('mousemove', doDrag);

// Touch events for mobile
slider.addEventListener('touchstart', startDrag);
slider.addEventListener('touchend', endDrag);
slider.addEventListener('touchmove', doDrag);

// Set initial main image source to the first thumbnail's image
document.addEventListener('DOMContentLoaded', (event) => {
    const firstThumbnail = document.querySelector('.thumbnail-card img');
    const mainImage = document.getElementById('mainImage');
    mainImage.src = firstThumbnail.src;
    mainImage.alt = firstThumbnail.alt;
});
