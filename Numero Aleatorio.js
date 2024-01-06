function generarFraccionAleatoria (){
    return Math.random();
}

console.log(generarFraccionAleatoria())
console.log(generarFraccionAleatoria())
console.log(generarFraccionAleatoria())
console.log(generarFraccionAleatoria())
console.log(generarFraccionAleatoria())
console.log(generarFraccionAleatoria())

var numeroAletario = Math.floor(Math.random() * 20 );

console.log(numeroAletario)



function generarEnteroAleatorio (limiteSuperior){
    return Math.floor(Math.random() * limiteSuperior )
}

console.log(generarEnteroAleatorio(20))
console.log(generarEnteroAleatorio(20))

for (var i = 0; i < 15; i++){
    console.log(generarEnteroAleatorio(20))
}




