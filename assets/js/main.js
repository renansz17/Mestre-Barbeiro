var botaoVoltar = document.querySelector(".botaoVoltar")
var rootElement= document.documentElement

function voltarAoTopo(){
    rootElement.scrollTo({
        top:0,
        behavior:"smooth"
    })
}

botaoVoltar.addEventListener("click",voltarAoTopo)