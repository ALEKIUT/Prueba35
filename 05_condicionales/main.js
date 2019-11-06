//if(condicion){
//    comandos...
//} else if(condicion2){
//comandos
//}

//let edad=8;
//if(edad ===18){
//    console.log ("eres mayor de edad");
//} else{
//    console.log("No eres mayor de edad");
//}


/* let numero= prompt("ingresa numero");
if (numero %2 ===0){
    console.log ("es par");
} else{
    console.log ("es impar");
} */

/* let dia= 0;
if (dia ===0){
    console.log ("lunes");
} else if (dia===1){
    console.log ("martes");
} else if (dia===2){
    console.log ("martes");
} else if (dia===3){
    console.log ("miercoles");
} else if (dia===4){
    console.log ("jueves");
} else */


/* let edad= prompt("ingresa tu edad");
if (edad >= 18 && edad <65){
    console.log ("puedes conducir con licencia");
} 
if (edad >= 16 && edad < 18){
        console.log ("puedes conducir con permiso");
}
if (edad <16){
    console.log ("no puedes conducir");
}
if (edad >= 65){
    console.log ("eres un peligro")
} else {
    console.log ("no entiendo");
}*/


/* let player1= prompt ("que eliges jugador 1"). toLowerCase();;
let player2= prompt ("que eliges jugador 2"). toLowerCase();;

if (player1 == "piedra" && player2 == "piedra"){
    console.log ("empate");
}
else if (player1 == "papel" && player2 == "papel"){
    console.log ("empate");
}
else if (player1 == "tijera" && player2 == "tijera"){
    console.log ("empate");
}
else if (player1 == "piedra" && player2 == "tijera"){
    console.log ("gana player1")
    console.log ("pierde player2")
}
else if (player1 == "tijera" && player2 == "papel"){
    console.log ("gana player1")
    console.log ("pierde player2")
}
else if (player1 == "papel" && player2 == "piedra"){
    console.log ("gana player1")
    console.log ("pierde player2")
}
else if (player1 == "piedra" && player2 == "papel"){
    console.log ("pierde player1")
    console.log ("gana player2")
}
else if (player1 == "tijera" && player2 == "piedra"){
    console.log ("pierde player1")
    console.log ("gana player2")
}
else if (player1 == "papel" && player2 == "tijera"){
    console.log ("pierde player1")
    console.log ("gana player2")
}
else {
    console.log ("vuelve a intentarlo")
} */


let password= prompt("escribe tu contraseña")
if (password === "perritoSalchicha123"){
    console.log ("accedes")
}
else {
    console.error ("no accedes")
}