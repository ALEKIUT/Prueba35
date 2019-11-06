let titulo = document.getElementById("titulo");
let cambiartexto = document.getElementById("titulo2");
let textchange = document.getElementById("button");
let nombre = document.getElementById("Nombre");
let email = document.getElementById("email");
let password = document.getElementById("password");
let enviar = document.getElementById("enviar");
let valor1 = document.getElementById("valor1");
let valor2 = document.getElementById("valor2");
let valor3 = document.getElementById("valor3");
//console.log(titulo, titulo2);

titulo.innerHTML = "hola desde js"
cambiartexto.innerHTML = "voy a cambiar texto"

const nuevotexto = ()=>{
    textchange.innerHTML = "cambiar texto"
}
textchange.addEventListener("click", nuevotexto);

const formulario = () => {
    let valorNombre = nombre.value;
    let valorEmail = email.value;
    let valorPassword = paswword.value;

    valor1.innerHTML = nombre.value;
    valor2.innerHTML = email.value;
    valor3.innerHTML = password.value;

    let nombreCorrecto= "Juan";
    let emailCorrecto = "a@.com";
    let passwordCorrecto = "xd";
    if(valorNombre === nombreCorrecto && valorEmail === emailCorrecto && valorPassword === passwordCorrecto){
        validar.innerHTML = "Bienvenido"
     } else {
         validar.innerHTML = "Datos incorrectos";
     }
}
enviar.addEventListener("click", formulario)