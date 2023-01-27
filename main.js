var Jogador_1;
var Jogador_2;

function Logar(){
    Jogador_1 = document.getElementById("player1NameInput").value;
    Jogador_2 = document.getElementById("player2NameInput").value;

    localStorage.setItem("jogador1", Jogador_1);
    localStorage.setItem("jogador2", Jogador_2);

    window.location="game_page.html";
}