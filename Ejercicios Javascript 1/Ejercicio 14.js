const sumarArreglo = (arreglo, posicionInicial, posicioFinal) => {
    let suma = 0
    for (i = posicionInicial; i <= posicioFinal; i++){
        suma+= arreglo[i]
    }
    return suma
}

console.log(sumarArreglo([1, 2, 3], 1, 2));
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 6));
console.log(sumarArreglo([7, 8, 9], 1, 0))