function contarRango(rangoInicial, rangoFinal) {
    var contador = 0
    for (var i = rangoInicial + 1; i < rangoFinal; i++) {
        contador++
    }
    return contador
}

console.log(contarRango(1, 9))
console.log(contarRango(1332, 8743))
console.log(contarRango(5, 6))