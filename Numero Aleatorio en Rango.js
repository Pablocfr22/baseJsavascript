function rangoAleatorio(limiteInf, limiteSup){
    return Math.floor(Math.random() * (limiteSup - limiteInf + 1)) + limiteInf ;
}

for (var i = 0; i< 15;i++){
    console.log(rangoAleatorio(3,8));

}

console.log(rangoAleatorio(3,8));
console.log(rangoAleatorio(3,8));
console.log(rangoAleatorio(3,8));
console.log(rangoAleatorio(3,8));
console.log(rangoAleatorio(3,8))