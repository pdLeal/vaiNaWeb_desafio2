// Seleciona as setas
const filmes = document.querySelectorAll(".filmes");
filmes.forEach(sec => {
    const setaEsquerda = sec.firstElementChild;
    const setaDireita = sec.lastElementChild;
    setaDireita.addEventListener("click", scrollRight);
    setaEsquerda.addEventListener("click", scrollLeft);
});
// Seleciona os outer-containers e seus respectivos tamanhos
const outers = document.querySelectorAll(".outer-container");
const outerCima = outers[0];
const outerBaixo = outers[1];
let cimaWidth = outerCima.offsetWidth;
let baixoWidth = outerBaixo.offsetWidth;
// Difine a posição inicial das divs escondidas
if (window.innerWidth >= 790) {
    outerCima.lastElementChild.style.transform = `translate(${cimaWidth + 16}px)`;
    outerBaixo.lastElementChild.style.transform = `translate(${baixoWidth + 16}px)`;
}

function scrollRight() {
    ajustarOuter();
    
    const previousSibling = this.previousElementSibling;
    previousSibling.firstElementChild.classList.add("hidden");
    previousSibling.lastElementChild.classList.remove("hidden");
    previousSibling.lastElementChild.style.transform = `translate(0)`;

    if (outerCima === previousSibling) { // Caso outerCima e outerBaixo possuam tamanhos diferentes, garante q o container se mova de acordo com o tamanho correto 
        previousSibling.firstElementChild.style.transform = `translate(-${cimaWidth + 16}px)`;
    } else {
        previousSibling.firstElementChild.style.transform = `translate(-${baixoWidth + 16}px)`;
    }
}

function scrollLeft() {
    ajustarOuter();

    const nextSibling = this.nextElementSibling;
    nextSibling.firstElementChild.classList.remove("hidden");
    nextSibling.lastElementChild.classList.add("hidden");
    nextSibling.firstElementChild.style.transform = `translate(0)`;

    if (outerCima === nextSibling) {
        nextSibling.lastElementChild.style.transform = `translate(${cimaWidth + 16}px)`;
    } else {
        nextSibling.lastElementChild.style.transform = `translate(${baixoWidth + 16}px)`;
    }
}

function ajustarOuter() { // Caso a página seja redimensionada, garante q os outer-containers ñ se movam mais, ou menos, q o ncessário 
    cimaWidth = outerCima.offsetWidth;
    baixoWidth = outerBaixo.offsetWidth;
}

function resizeWindow() {
    if (window.innerWidth < 790) {
        for (let i = 0; i < outers.length; i++) {
            outers[i].lastElementChild.classList.remove("hidden");
            outers[i].firstElementChild.classList.remove("hidden");

            outers[i].lastElementChild.style.transform = `translate(0)`;
            outers[i].firstElementChild.style.transform = `translate(0)`;
        }
    } else {
        for (let i = 0; i < outers.length; i++) {
            outers[i].lastElementChild.classList.add("hidden");
            outers[i].firstElementChild.classList.remove("hidden");

            outers[i].lastElementChild.style.transform = `translate(${outers[i].offsetWidth + 16}px)`;
            outers[i].firstElementChild.style.transform = `translate(0)`;
        }
    }
}


window.addEventListener("resize", resizeWindow);