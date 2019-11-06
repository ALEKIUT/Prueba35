
const tablas = (a , b) => {
    for (let i = a; i <= b; i++){
        for (let j = 1; j <= 10; j++)
    console.log(i + "x" + j + "=" + i * j);
    }
}
tablas(4, 7);




const nuevasuma =(a, b) => {
    return  a + b ;
}
const nuevaresta =(a, b) => {
    return a - b ;
}
const multiplicacion = (a , b) =>{
    console.log(a * b); 
}

multiplicacion(nuevasuma(3,2) , nuevaresta(15,10));