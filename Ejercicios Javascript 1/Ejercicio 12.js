const multiplicarArreglo = (arreglo) => {
    var suma
    suma = arreglo.reduce((a, b) => a * b, 1)
    return suma
}

console.log(multiplicarArreglo([1, 2, 3, 5, 6]))
console.log(multiplicarArreglo([4, 1, 2, 3])) // 24
console.log(multiplicarArreglo([1, 2, 3, 4, 5, 6, 7, 8])) // 40320
console.log(multiplicarArreglo([])) // 1



const multiplicarArreglo2 = (arreglo) => {
    var acumulador = 1
    for (var i = 0; i<arreglo.length; i++){
        acumulador = acumulador * arreglo[i]
    }
    return acumulador
}
console.log(multiplicarArreglo2([1, 2, 3, 5, 6]))
console.log(multiplicarArreglo2([4, 1, 2, 3])) // 24
console.log(multiplicarArreglo2([1, 2, 3, 4, 5, 6, 7, 8])) // 40320
console.log(multiplicarArreglo2([])) // 1
