var Jogador_1 =localStorage.getItem("jogador1");
var Jogador_2 =localStorage.getItem("jogador2");
var Pontos_1=0;
var Pontos_2=0;
var palavra1;
var palavra2;

document.getElementById("player1Name").innerHTML =Jogador_1+":";
document.getElementById("player2Name").innerHTML =Jogador_2+":";
document.getElementById("player1Score").innerHTML =Pontos_1;
document.getElementById("player2Score").innerHTML =Pontos_2;
document.getElementById("playerQuestion").innerHTML ="Turno da pergunta: "+Jogador_1;
document.getElementById("playerAnswer").innerHTML ="Turno da resposta: "+Jogador_2;

function Enviar(){
    palavra1=document.getElementById("word").value;
    palavra2=palavra1.toLowerCase();
    var letra1=palavra2.charAt(1);
    var comprimento_Divd_2=Math.floor(palavra2.length/2);
    var letra2=palavra2.charAt(comprimento_Divd_2);
    var comprimento_menos_1=palavra2.length-1;
    var letra3=palavra2.charAt(comprimento_menos_1);
    var remove_letra_1=palavra2.replace(letra1, "_");
    var remove_letra_2=remove_letra_1.replace(letra2, "_");
    var remove_letra_3=remove_letra_2.replace(letra3, "_");

    var palavra_da_pergunta="<h3 id='wordDisplay'>Palavra: "+remove_letra_3+"</h3>";
    var palavra_da_resposta="<br><span>Resposta: </span><input type='text'id='inputCheckBox'>";
    var botao="<br><button onclick='Checar()'class='btn btn-primary'id='checar'>Checar</button>";
    var caixa=palavra_da_pergunta+palavra_da_resposta+botao;
    document.getElementById("output").innerHTML=caixa;
    document.getElementById("word").value="";
}
var turno_da_pergunta ="Jogador_1";
var turno_da_resposta ="Jogador_2";

function Checar(){
    var resposta_1 =document.getElementById("inputCheckBox").value;
    var resposta_2 =resposta_1.toLowerCase();

    if(resposta_2==palavra2){
        if(turno_da_resposta=="Jogador_1"){
            Pontos_1=Pontos_1+1;
            document.getElementById("player1Score").innerHTML=Pontos_1;
        }
        else{
            Pontos_2=Pontos_2+1;
            document.getElementById("player2Score").innerHTML=Pontos_2;
        }
    }
        if(turno_da_pergunta=="Jogador_1"){
            turno_da_pergunta="Jogador_2";
            document.getElementById("playerQuestion").innerHTML="Turno da pergunta: "+Jogador_2;
        }
        else{
            turno_da_pergunta="Jogador_1";
            document.getElementById("playerQuestion").innerHTML="Turno da pergunta: "+Jogador_1;
        }
        if(turno_da_resposta=="Jogador_1"){
            turno_da_resposta="Jogador_2";
            document.getElementById("playerAnswer").innerHTML="Turno da resposta: "+Jogador_2;
        }
        else{
            turno_da_resposta="Jogador_1";
            document.getElementById("playerAnswer").innerHTML="Turno da resposta: "+Jogador_1;
        }
        document.getElementById("wordDisplay").innerHTML="Palavra: ";
        document.getElementById("inputCheckBox").value="";
        document.getElementById("checar").style.display="none";
}