//funcion que arregla sonido
let booleano = false
function playmute() {
    if (booleano) {
        document.getElementById("musica").removeAttribute("controls", true)
        booleano = !booleano
    } else {document.getElementById("musica").setAttribute("controls", true)
        booleano = !booleano
    }
}


//dialogos

let r=0
function envio(){
    alert("Ta_bueno")
}
function saludar(){
    alert("Hola!, ¿cómo estás?");
}
function texto_alegre(){
    alert("Me alegra que hayas ingresado a mi consigna.");
}
let sueño=true
function alerta_de_insomnio(){
    if (sueño){
        alert("dormite perro no te vas a acostar a la 6 de la mañana");
    } else { alert("si tenes sueño dormite gato");}
}
function respuesta_boton1(){
    let lista=["deja de tocar", "prprpr", "pack de lolis", "pasa el link" , "mmm yeah"]
    if (r<5){
        alert(lista[r]);
        r+=1;
    } else {alert(lista[4])}
}
function loli(){
    if (r=3){
        return "lolis.png"
    } else {return "uff.jpg"}
}
saludar();
texto_alegre();
alerta_de_insomnio();


//movimientos
//document.getElementById("zombi1").style.paddingLeft<1


let kills = 0
let presentacion = 0
let lolimusculosax = 30
let contador = 1

function movimiento(){
    lolimusculosax -= 1
       presentacion +=1
       document.getElementById("zombi1").style.paddingLeft = lolimusculosax + "%"
       if (presentacion === 1) {
        document.getElementById("fff").style.backgroundImage = 'url("Escenarios/inicio.png")'
       }
       if (presentacion === 2) {
        document.getElementById("fff").style.backgroundImage = 'url("Escenarios/FuegoForestal.gif")'
       }
       if (lolimusculosax<1) {
           kills+=1
           lolimusculosax = 30
       }
       if (kills > 4 && contador===1){
        document.getElementById("loli").src = "Personajes/Transformaciones/SSJ.png";
        document.getElementById("zombi1").src = "Personajes/Zombi2.png"
        document.getElementById("musica").src = "audio/yt1s.com - Música de Pokemon Red Blue Batalla VS Entrenador.mp3"
        contador+=1
       } 
       if (kills > 9 && contador===2){
        document.getElementById("loli").src = "Personajes/Transformaciones/transformandose.png"
        contador+=1
       }
       if (kills > 14&& contador===3){
        document.getElementById("loli").src = "Personajes/Transformaciones/SSJ1v2.png"
        document.getElementById("zombi1").src = "Personajes/Zombi3.png"
        document.getElementById("zombi1").className = "boss"
        document.getElementById("fff").style.backgroundImage = 'url("Escenarios/Fuego.gif")'
        document.getElementById("musica").src = "audio/yt1s.com - Dragon Ball Z ChaLaHeadChaLa Opening Full LatinoBy Ricardo Silva Letra.mp3"
        contador+=1
        }
       if (kills > 19&&contador===4){
        document.getElementById("loli").src = "Personajes/Transformaciones/SSJ2.png"
        document.getElementById("musica").src = "audio/yt1s.com - THOR SUPERHD 2019 Destripando la Historia.mp3"
        contador+=1
       }
       if (kills > 24&&contador===5){
        document.getElementById("loli").src = "Personajes/Transformaciones/SSJ3.png"
        document.getElementById("zombi1").src = "Personajes/Tiki.png"
        contador+=1
       }
       if (kills > 29&&contador===6){
        document.getElementById("loli").src = "Personajes/Transformaciones/SSJgodF.png"
        document.getElementById("zombi1").src = "Personajes/Solaire.gif"
        contador+=1
       }
       if (kills > 34&&contador===7){
        document.getElementById("loli").src = "Personajes/Transformaciones/UltraF.png"
        document.getElementById("musica").src = "audio/yt1s.com - Dragon Ball Super Opening 2 En Español Latino.mp3"
        contador+=1
       }
       if (kills > 39&&contador===8){
        document.getElementById("loli").src = "Personajes/Transformaciones/Ultra.png"
        document.getElementById("zombi1").src = "Personajes/Bills.gif"
        contador+=1
       }
       if (kills > 44){
        document.getElementById("fff").style.backgroundImage = 'url("Escenarios/Winner.gif")'
       }
}

document.addEventListener("keydown", event => {

    if(event.key == "ArrowRight"){ //Tecla enter
       movimiento()
       
    }

 });
 
document.addEventListener("keydown", event => {

    if(event.key == "ArrowLeft"){ //Tecla enter
       lolimusculosax -= 1
       document.getElementById("loli").style.paddingLeft = lolimusculosax + "%"
       
    }

 });
 let lolimusculosay = 0
 document.addEventListener("keydown", event => {

    if(event.key == "ArrowUp"){ //Tecla enter
       lolimusculosay -= 1
       document.getElementById("loli").style.paddingTop = lolimusculosay + "%"
       
    }

 });
 document.addEventListener("keyup", event => {

    if(event.key == "ArrowDown"){ //Tecla enter
       lolimusculosay += 1
       document.getElementById("loli").style.paddingTop = lolimusculosay + "%"
       
    }

 });

 //spawn
 document.addEventListener("keydown", event => {

    if(event.key == "z"){ //Tecla enter
       lolimusculosay += 1
       document.getElementById("fff").innerHTML += '<img class="enemigo" src="Personajes/Zombi1.png" id="zombi1"></img>'
       
    }

});