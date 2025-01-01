let header = document.querySelector("header");
let scrollbtn = document.querySelector(".scroll")


window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  } else if(window.scrollY == 0) {
    header.style.backgroundColor = ""
  } 
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    scrollbtn.style.display = "inline-block"; 
} else {
  scrollbtn.style.display = "none"; 
}
});



scrollbtn.onclick = function() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth' 
  });
};





let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = "none";
    dots[i].classList.remove("active");
  });
  slides[index].style.display = "block";
  dots[index].classList.add("active");
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

showSlide(currentSlide);

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentSlide = index;
    showSlide(currentSlide);
    clearInterval(autosideint);
  });
});

let autosideint = setInterval(nextSlide, 5000);













const comingslide = document.querySelectorAll(".coming");
let currentIndex = 0;
const totalSlides = comingslide.length;



function showcomSlide(index) {
  comingslide.forEach((slide) => {
    slide.style.transform = `translateX(-${index * 170}px)`;
  });
}

function nextcomSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showcomSlide(currentIndex);
}

setInterval(nextcomSlide, 3000);
