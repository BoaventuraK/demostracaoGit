const area=document.getElementById("caixa")

function clicou(){
    area.innerText="Clicado!"
    area.style.background="blue"
}

function entrar(){
    area.innerText="Entrou!"
}

function sair(){
    area.innerText="Saiu!"
    area.style.background="aqua"
}

area.addEventListener("click",clicou)
area.addEventListener("mouseenter",entrar)
area.addEventListener("mouseout",sair)
