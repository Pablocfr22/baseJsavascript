var miArreglo = [4, 6, 8, 2];
var total = 0;

for (var i = 0; i < miArreglo.length; i++) {
    console.log('Iteracion ' + i)
    console.log(miArreglo[i])
    total += miArreglo[i];
}
console.log(total)



var lenguajes = ['JavaScript', 'Phyton', 'Java', 'C++']

for (var i = 0; i < lenguajes.length; i++) {
    console.log(lenguajes[i].toUpperCase())
}



function contarNumeroPares(arreglo) {
    var total = 0;

    for (var i = 0; i < arreglo.length; i++) {
        if (arreglo[i] % 2 == 0) {
            total++;
        }
    }
    return total;
}

console.log(contarNumeroPares([1, 5, 6, 8, 12, 15]))

