const menu = document.querySelector(".header__menu");

menu.addEventListener("click", () => {
  const nav = document.querySelector(".header__nav");
  nav.classList.toggle("mostrar");
});

//carrucel

const imgs = document.querySelector(".imgs");
const punto = document.querySelectorAll(".punto");

const flechas = document.querySelectorAll(".flechas");

flechas.forEach((cadaFlecha, i) => {
  flechas[i].addEventListener("click", () => {
    let position = i;
    let operacion = position * -50;

    imgs.style.transform = `translate(${operacion}%)`;
    flechas.forEach((cadaPunto, i) => {
      punto[i].classList.remove("active");
    });
    punto[i].classList.add("active");
  });
});

// punto.forEach((cadaPunto, i) => {
//   punto[i].addEventListener("click", () => {
//     let position = i;
//     let operacion = position * -50;

//     imgs.style.transform = `translate(${operacion}%)`;

//     punto.forEach((cadaPunto, i) => {
//       punto[i].classList.remove("active");
//     });
//     punto[i].classList.add("active");
//   });
// });
