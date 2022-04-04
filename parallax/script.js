
let estrellas = document.getElementById("Estrellas");
let mountain1 = document.getElementById("Mountain1");
let texto = document.getElementById("texto");
let mountain2 = document.getElementById("Mountain2");
let btn = document.getElementById("btn");
let star = document.getElementById("Star");
let pinos = document.getElementById("Pinos");

window.addEventListener('scroll', function(){
let valor = window.scrollY;

estrellas.style.top = valor * 0.25 + 'px';
star.style.top = valor * 0.85 + 'px';
mountain1.style.top = valor * 0.25 + 'px';
texto.style.marginTop = valor * 0.65 + 'px';
mountain2.style.top = valor * 0.10 + 'px';
btn.style.marginTop = valor * 0.35 + 'px';
pinos.style.top = valor * 0 + 'px';



})

