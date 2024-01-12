function calcularImpuestos(edad, ingresos) {
    var impuesto = 0
    if (edad >= 18 && ingresos >= 1000) {
        impuesto = ingresos * 0.40
    }
    return 'Los impuestos son ' + impuesto
}

console.log(calcularImpuestos(25, 1200))
console.log(calcularImpuestos(17, 1700))
console.log(calcularImpuestos(18, 950))
console.log(calcularImpuestos(35, 3500))