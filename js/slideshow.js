let slideIndex = 1;

const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");

previousButton.addEventListener("click", function(){
    plusSlides(-1);
});

nextButton.addEventListener("click", function(){
    plusSlides(1);
});

showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);
}

function showSlides(n){
    
    const slides = document.getElementById("mySlides");

    if (n>slides.length){
        slideIndex = 1;
    }

    if (n<1){
        slideIndex = slides.length;
    }
    for (let i =0; i<slides.length;i++){
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}