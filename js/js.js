  // -------------------Loading-Skeleton-------------------------

  function hideLoadingSkeleton() {
    var loadingOverlay = document.querySelector('.Loading-Skeleton');
    if (loadingOverlay) {
      loadingOverlay.style.display = 'none';
    }
  }

  //time
  setTimeout(hideLoadingSkeleton, 20000); 

  //--------------------------Slide-------------------------

const slideArray = document.querySelectorAll('.slides .box');
const buttonAvancar = document.querySelector('.avancar');
const buttonVoltar = document.querySelector('.voltar');
let currentIndex = 1;
function showSlide(index) {
    slideArray.forEach((slide, i) => {
        const distance = (index - 1) * -116;
        if (index>0) {
            slide.style.transform = `translateX(${distance}%)`;
        } else {
            
        }
    });
    currentIndex = index;
}

buttonAvancar.addEventListener('click', () => {
    if (currentIndex < slideArray.length-2) {
        showSlide(currentIndex + 1);
    }
});

buttonVoltar.addEventListener('click', () => {
    if (currentIndex > 0) {
        showSlide(currentIndex - 1);
    }
});

showSlide(currentIndex);

//------------------------Descrição----------------------

let buttons = document.querySelectorAll('.click');
let descriptions = document.querySelectorAll('.text-desc');

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (descriptions[index].style.display === 'none' || descriptions[index].style.display === '') {
            descriptions[index].style.display = 'block';
        } else {
            descriptions[index].style.display = 'none';
        }
    });
});

  
