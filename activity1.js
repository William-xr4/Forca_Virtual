var pontos =0;

function atualiza_pontos(){
    pontos = pontos+1;
    document.getElementById("Score").innerHTML ="Pontuação : "+pontos;
}
function salva_pontuacao(){
    localStorage.setItem("Pontos", pontos);
}
function proxima_pagina(){
    window.location="http://127.0.0.1:5500/Forca_virtual/Forca/index.html";
}