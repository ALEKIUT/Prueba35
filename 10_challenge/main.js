

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
}