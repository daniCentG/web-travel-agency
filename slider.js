document.addEventListener("DOMContentLoaded", function() {
//  # 1) JS para el carrusel de imagenes
const slider = document.querySelector("#slider");
let sliderSections = document.querySelectorAll(".slider-section");
let sliderSectionLast = sliderSections[sliderSections.length - 1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function siguiente() {
    let sliderSectionFirst = document.querySelectorAll(".slider-section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function () {
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500);
}
function anterior() {
    let sliderSections = document.querySelectorAll(".slider-section");
    let sliderSectionLast = sliderSections[sliderSections.length - 1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function () {
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 500);
}
btnRight.addEventListener('click', function () {
    siguiente();
});
btnLeft.addEventListener('click', function () {
    anterior();
});
setInterval(function(){
    siguiente();
},  4000);


//    # 2) JS  del botón DESPLAZARSE HACIA ARRIBA

const d = document;
const w = window;
// Declaro un limite de cuando se va a mostrar el boton
const showButtonLimit = 200;
//Identifico que clase quiero capturar con el querySelector
const btnScroll = d.querySelector(".scroll-top-btn");
const scrollContainer = () => {
  return d.documentElement || d.body;
};
// Sin exportar la función, siempre se invocará cuando se haga scroll
d.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showButtonLimit) {
    btnScroll.classList.remove("hidden");
  } else {
    btnScroll.classList.add("hidden");
  }
});
// La función que llamará el botón para volver al inicio.
const goTop = () => {
  d.body.scrollIntoView({
    behavior: "smooth",
  });
};
// Capturamos el evento click del botón
btnScroll.addEventListener("click", goTop);

   
//   # 3) JS PARA HACER VISIBLE EL MENU CADA VEZ QUE SE DESPLAZA HACIA ABAJO
const menu = document.querySelector('.menu');
const sliderbtn = document.querySelector('.slider-btn');
// Función para manejar el desplazamiento de la página
function handleScroll() {
  const sliderbtnPosition = sliderbtn.getBoundingClientRect().top;
  if (window.scrollY > sliderbtnPosition) {
        menu.classList.add('menu-fixed');
    } else {
        menu.classList.remove('menu-fixed');
    }
}
// Capturamos el evento scroll y llamamos a la función handleScroll
window.addEventListener('scroll', handleScroll);
});