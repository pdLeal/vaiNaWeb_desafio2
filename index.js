// Seleciona as setas
const aclamados = document.querySelector(".aclamados");
const setaEsquerda = aclamados.firstElementChild;
const setaDireita = aclamados.lastElementChild;
// Seleciona as divs-filhas dentro do outer-container
const outer = document.querySelector(".outer-container");
const inner1 = outer.firstElementChild;
const inner2 = outer.lastElementChild;

let outerWidth = outer.offsetWidth;
inner2.style.transform = `translate(${outerWidth + 24}px)`;

function scrollRight() {
    ajustarOuter();
    inner1.classList.add("hidden-left");
    inner2.classList.remove("hidden-right");
    inner1.style.transform = `translate(-${outerWidth + 24}px)`;
    inner2.style.transform = `translate(0)`;
}

function scrollLeft() {
    ajustarOuter();
    inner1.classList.remove("hidden-left");
    inner2.classList.add("hidden-right");
    inner2.style.transform = `translate(${outerWidth + 24}px)`;
    inner1.style.transform = `translate(0)`;
}

function ajustarOuter() {
    outerWidth = outer.offsetWidth;
}

setaDireita.addEventListener("click", scrollRight);
setaEsquerda.addEventListener("click", scrollLeft);