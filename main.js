 
//  Developer Modal
var slideIndexA = 1;
showSlideA(slideIndexA);

function openLightbox1() {
    document.getElementById('Lightbox1').style.display = 'block';
}
    // left close lightbox name to see if I can change it to a generic for all three.
function closeLightbox1() {
document.getElementById('Lightbox1').style.display = 'none';
}

function changeSlideA(n) {
    showSlideA(slideIndexA += n);
}
function toSlideA(n) {
    showSlideA(slideIndexA = n);
}
            
function showSlideA(n) {
// Take control of the big image with class slides
const slidesA = document.getElementsByClassName('slideA');
let modalPreviews1 = document.getElementsByClassName('modal-preview1');
// Take control of the caption P tag text with class caption
const captionText1 = document.getElementById("caption1");

    if (n > slidesA.length) {
        slideIndexA = 1;	
        }
    if (n < 1) {
        slideIndexA = slidesA.length;
        }
    for (let i = 0; i < slidesA.length; i++) {
        slidesA[i].style.display = "none";
        }
    for (let i = 0; i < modalPreviews1.length; i++) {
        modalPreviews1[i].className = modalPreviews1[i].className.replace(' active', '');
        }
    slidesA[slideIndexA - 1].style.display = 'block';
    modalPreviews1[slideIndexA - 1].className += ' active';
    captionText1.innerHTML = modalPreviews1[slideIndexA-1].alt;
}


// Designer Modal 
var slideIndex = 1;
showSlide(slideIndex);

function openLightbox() {
  document.getElementById('Lightbox').style.display = 'block';
}

function closeLightbox() {
  document.getElementById('Lightbox').style.display = 'none';
}

function changeSlide(n) {
    showSlide(slideIndex += n);
}

function toSlide(n) {
    showSlide(slideIndex = n);
}

function showSlide(n) {
// Take control of the number of slide
  const slides = document.getElementsByClassName('slide');
// Take control of the large photo area
  let modalPreviews = document.getElementsByClassName('modal-preview');
// Take control of the caption P tag text with class caption
  const captionText = document.getElementById("caption");

//   Display the thumbnails and captions in preview which clicked on
  if (n > slides.length) {
    slideIndex = 1; 
    }
  if (n < 1) {
    slideIndex = slides.length;
    }
  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
  for (let i = 0; i < modalPreviews.length; i++) {
      modalPreviews[i].className = modalPreviews[i].className.replace(' active', '');
    }
    slides[slideIndex - 1].style.display = 'block';
    modalPreviews[slideIndex - 1].className += ' active';
    captionText.innerHTML = modalPreviews[slideIndex-1].alt;
    }



    // Potter Modal 
var slideIndex2 = 1;
showSlide2(slideIndex2);

function openLightbox2() {
  document.getElementById('Lightbox2').style.display = 'block';
}

function closeLightbox2() {
  document.getElementById('Lightbox2').style.display = 'none';
}

function changeSlide2(n) {
    showSlide2(slideIndex2 += n);
}

function toSlide2(n) {
    showSlide2(slideIndex2 = n);
}

function showSlide2(n) {
// Take control of the number of slide
  const slides2 = document.getElementsByClassName('slide2');
// Take control of the large photo area
  let modalPreviews2 = document.getElementsByClassName('modal-preview2');
// Take control of the caption P tag text with class caption
  const captionText2 = document.getElementById("caption2");

//   Display the thumbnails and captions in preview which clicked on
  if (n > slides2.length) {
    slideIndex2 = 1; 
    }
  if (n < 1) {
    slideIndex2 = slides2.length;
    }
  for (let i = 0; i < slides2.length; i++) {
      slides2[i].style.display = "none";
    }
  for (let i = 0; i < modalPreviews2.length; i++) {
      modalPreviews2[i].className = modalPreviews2[i].className.replace(' active', '');
    }
    slides2[slideIndex2 - 1].style.display = 'block';
    modalPreviews2[slideIndex2 - 1].className += ' active';
    captionText2.innerHTML = modalPreviews2[slideIndex2-1].alt;
    }

