let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    const offset = -currentSlide * 100;
    document.querySelector('.slider-content').style.transform = `translateX(${offset}%)`; 
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

setInterval(() => {
    nextSlide();
}, 4000); 









let currentIndex = 0;

function displaySlide(index) {
    const slides = document.getElementsByClassName('carousel-slide');
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    for (let slide of slides) {
        slide.style.display = 'none';
    }
    slides[currentIndex].style.display = 'block';
}

function navigateSlide(n) {
    displaySlide(currentIndex + n);
}

// Initialize the carousel
displaySlide(currentIndex);

// Auto-scroll slides every 5 seconds
setInterval(() => {
    navigateSlide(1);
}, 5000);
