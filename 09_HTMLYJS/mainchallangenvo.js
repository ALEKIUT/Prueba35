let nombre = document.getElementById("Nombre");
let email = document.getElementById("email");

let enviar = document.getElementById("enviar");
let valor1 = document.getElementById("valor1");
let valor2 = document.getElementById("valor2");

let formcheck =document.getElementById()

const formulario = () => {
    let valorNombre = Nombre.value;
    let valorEmail = email.value;

    valor1.innerHTML = Nombre.value;
    valor2.innerHTML = email.value;

    let nombreCorrecto= "Juan";
    let emailCorrecto = "a@.com";

    if(valorNombre === nombreCorrecto && valorEmail === emailCorrecto){
        validar.innerHTML = "Bienvenido"
     } 
}
enviar.addEventListener("click", formulario)



