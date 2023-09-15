document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.sliderwrapper');
    let isDown = false;
    let startX;
    let scrollLeft;
    let preventClick = false;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.getBoundingClientRect().left;  // relative to the element
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
    });

    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
    });

    slider.addEventListener('mousemove', (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.getBoundingClientRect().left;  // relative to the element
        const walk = (x - startX);
        slider.scrollLeft = scrollLeft - walk;
        preventClick = true; // Prevent single click after dragging
    });

    const links = slider.querySelectorAll('.itemproductlink');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            if (preventClick) {
                e.preventDefault(); // This prevents the link from activating on single click after drag
            }
        });
        
        // Add double click event to links
        link.addEventListener('dblclick', (e) => {
            window.location.href = e.target.href; // This will redirect to the href of the link on double click
        });
    });
    
    // Reset preventClick after some delay
    document.addEventListener('mouseup', () => {
        setTimeout(() => {
            preventClick = false;
        }, 50);
    });
});
