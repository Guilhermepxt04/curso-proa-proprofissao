let element = document.querySelector("#header");
let fundo = document.querySelector("#fundo");
let myImage = document.querySelector("#myImage");
let text = document.querySelectorAll(".texto");

function modo_escuro() {

    fundo.style.backgroundColor="black";
    fundo.style.Color="gray";
    myImage.src="images/fundo.jpg";
    element.innerHTML = "Testando Modo Escuro"
}

function modo_daltonico() {

    fundo.style.backgroundColor="violet";
    fundo.style.Color="lime";
    myImage.src="images/daltonismo.jpg";
    element.innerHTML = "Testando Modo daltonico"
}

function modo_normal() {

    fundo.style.backgroundColor="white";
    fundo.style.Color="black";
    myImage.src="images/fundo.jpg";
    element.innerHTML = "Testando mudança de cor de fundo Body, a cor da fonte e a imagem na página"
    text.forEach(t => {
        t.style.fontSize="18px";
    });
}

function modo_baixa_visao() {

    fundo.style.backgroundColor="white";
    fundo.style.Color="black";
    myImage.src="images/fundo.jpg";
    element.innerHTML = "Testando modo baixa visao"
    text.forEach(t => {
        t.style.fontSize="30px";
    });
}