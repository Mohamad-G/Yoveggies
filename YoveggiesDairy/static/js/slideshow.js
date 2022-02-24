let slides = document.querySelectorAll('.slideshow > img');
let bubbles = document.querySelectorAll('span.slideshow-bubble');
let slide_index = 0;
startSlideshow();

function startSlideshow() {

    for (let i = 0; i < slides.length; ++i) {
        slides[i].style.display = 'none';
        bubbles[i].style.backgroundColor = 'white';
    }

    slide_index = (slide_index >= slides.length) ? 0 : slide_index;
    slides[slide_index].style.display = 'block';
    bubbles[slide_index++].style.backgroundColor = 'grey';

    setTimeout(startSlideshow, 3000);
}