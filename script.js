//  botao de trocar iluminacao do site
function trocaModo() {
    let html = document.documentElement
    html.classList.toggle("dark")
}

//  para o carrossel funcionar e não quebrar, é preciso que a div
//  dos logos esteja duplicada e só então adicionar a animação
function auxiliarCarrossel() {
    const carrossel = document.querySelector(".carrossel")
    let copia = document.querySelector(".carrossel-logos").cloneNode(true)
    carrossel.appendChild(copia)

    const logoDivs = document.querySelectorAll(".carrossel-logos")
    logoDivs.forEach(div => {
        div.style.animation = '20s linear 0s infinite normal none running slide'
    })

    carrossel.addEventListener("mouseover", function () {
        logoDivs.forEach(div => {
            div.style.animation = '20s linear 0s infinite normal none paused slide'
        })
    })

    carrossel.addEventListener("mouseleave", function () {
        logoDivs.forEach(div => {
            div.style.animation = '20s linear 0s infinite normal none running slide'
        })
    })
}

//  evitar que as imagens possam ser arrastadas
function evitaDrag() {
    const elementos = document.querySelectorAll("img")
    elementos.forEach(elemento => {
        elemento.setAttribute("draggable", "false")
    })
}


document.addEventListener("DOMContentLoaded", function () {
    auxiliarCarrossel()
    evitaDrag()
})