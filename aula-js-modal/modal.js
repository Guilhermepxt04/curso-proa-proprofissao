let modal = document.querySelector(".modal")
let janelaEscura = document.querySelector(".janela_escura")
let imagem = document.querySelector(".imagem")

function abrirModal() {
    janelaEscura.style.visibility = "visible";
    modal.style.visibility = "visible";
    imagem.style.visibility = "visible";
}

function fecharModal() {
    janelaEscura.style.visibility = "hidden";
    modal.style.visibility = "hidden";
    imagem.style.visibility = "hidden";
}