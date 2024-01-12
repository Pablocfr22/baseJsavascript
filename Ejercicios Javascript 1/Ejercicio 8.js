function sumarRango(numeroInicial, numeroFinal) {
    var resultado = []
    for (var i = numeroInicial ; i <= numeroFinal; i++) {
        resultado.push(i)
    }
    var sumaTotal = resultado.reduce((a, b) => a + b, 0)
    return sumaTotal
}

console.log(sumarRango(0, 10))
console.log(sumarRango(12, 14)) 
console.log(sumarRango(5, 5)) 

