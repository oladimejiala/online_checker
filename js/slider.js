let slideIndex = 0;
const slides = document.querySelectorAll('.slider img');

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    slideIndex = (n + slides.length) % slides.length;
    slides[slideIndex].classList.add('active');
}

function changeSlide(n) {
    showSlide(slideIndex += n);
}

// Automatic slideshow
let interval = setInterval(() => changeSlide(1), 3000);
