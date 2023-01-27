/* 
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"


se ocupan los modificadores globlaes i, g y m
i = para que se aplique el cambio en mayusculas y minusculas
g = por si el caracter aparece multiples veces en la cadena
m = por si el texto tiene varias lineas
*/

function focus() {
    var texArea = document.getElementById("area1");
    texArea.focus();
}

focus();

function encriptar() {
    var texto = document.getElementById("area1").value

    var txtEncriptado = texto.toString().replace(/e/igm, "enter");
    var txtEncriptado = txtEncriptado.toString().replace(/i/igm, "imes");
    var txtEncriptado = txtEncriptado.toString().replace(/a/igm, "ai");
    var txtEncriptado = txtEncriptado.toString().replace(/o/igm, "ober");
    var txtEncriptado = txtEncriptado.toString().replace(/u/igm, "ufat");

    document.getElementById("yoda").style.display = "none"
    document.getElementById("texto-nada").style.display = "none"
    document.getElementById("area2").innerHTML = txtEncriptado;
}

function desencriptar() {
    var texto = document.getElementById("area1").value

    var txtEncriptado = texto.toString().replace(/enter/igm, "e");
    var txtEncriptado = txtEncriptado.toString().replace(/imes/igm, "i");
    var txtEncriptado = txtEncriptado.toString().replace(/ai/igm, "a");
    var txtEncriptado = txtEncriptado.toString().replace(/ober/igm, "o");
    var txtEncriptado = txtEncriptado.toString().replace(/ufat/igm, "u");

    document.getElementById("yoda").style.display = "none"
    document.getElementById("texto-nada").style.display = "none"
    document.getElementById("area2").innerHTML = txtEncriptado;
}

function copiar() {
    var contenido = document.getElementById("area2").value

    navigator.clipboard.writeText(contenido)
    alert("Se ha copiado el texto!")

}
