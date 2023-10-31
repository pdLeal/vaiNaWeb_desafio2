// Seleciona as setas
const aclamados = document.querySelectorAll(".aclamados");
aclamados.forEach(sec => {
    const setaEsquerda = sec.firstElementChild;
    const setaDireita = sec.lastElementChild;
    setaDireita.addEventListener("click", scrollRight);
    setaEsquerda.addEventListener("click", scrollLeft);
});
// Seleciona os outer-containers e seus respectivos tamanhos
const outers = document.querySelectorAll(".outer-container");
let outerCima = outers[0];
let outerBaixo = outers[1];
let cimaWidth = outerCima.offsetWidth;
let baixoWidth = outerBaixo.offsetWidth;
// Difine a posição inicial das divs escondidas
outerCima.lastElementChild.style.transform = `translate(${cimaWidth + 16}px)`;
outerBaixo.lastElementChild.style.transform = `translate(${baixoWidth + 16}px)`;

function scrollRight() {
    ajustarOuter();
    const previousSibling = this.previousElementSibling;
    previousSibling.firstElementChild.classList.add("hidden-left");
    previousSibling.lastElementChild.classList.remove("hidden-right");

    if(outerCima === previousSibling) {
        previousSibling.firstElementChild.style.transform = `translate(-${cimaWidth + 16}px)`; 
    } else {
        previousSibling.firstElementChild.style.transform = `translate(-${baixoWidth + 16}px)`;
    }
    
    previousSibling.lastElementChild.style.transform = `translate(0)`;
}

function scrollLeft() {
    ajustarOuter();
    const nextSibling = this.nextElementSibling;
    nextSibling.firstElementChild.classList.remove("hidden-left");
    nextSibling.lastElementChild.classList.add("hidden-right");
    nextSibling.firstElementChild.style.transform = `translate(0)`;
    
    if(outerCima === nextSibling) {
        nextSibling.lastElementChild.style.transform = `translate(${cimaWidth + 16}px)`;
    } else {
        nextSibling.lastElementChild.style.transform = `translate(${baixoWidth + 16}px)`;
    }
}

function ajustarOuter() {
    cimaWidth = outerCima.offsetWidth;
    baixoWidth = outerBaixo.offsetWidth;
}