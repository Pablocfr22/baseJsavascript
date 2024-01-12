const sumarArreglo = (arreglo) =>{
    var suma
    suma = arreglo.reduce((a, b) => a + b, 0)
    return suma
}

console.log(sumarArreglo([1,2,3,4,5]))