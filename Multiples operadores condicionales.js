function compararNumeros(a, b) {
    if (a == b) {
        return 'a y b son iguales'
    } else if (a > b) {
        return 'a es mayor que b'
    } else {
        return 'b es mayor que a'
    }
}
console.log(compararNumeros(5, 5))
console.log(compararNumeros(10, 8))
console.log(compararNumeros(10, 12))



function compararNumeros2(a, b) {
    return a == b ? 'a y b son iguales'
        : a > b ? 'a es mayor que b'
            : 'b es mayor que a';
};
console.log(compararNumeros2(6, 6))
console.log(compararNumeros2(11, 9))
console.log(compararNumeros2(11, 13))

