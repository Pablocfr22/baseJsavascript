function likes(numero) {
    // Verifica si el número es menor a 1000
    if (numero < 1000) {
        // Si es menor a 1000, devuelve el mismo número como una cadena
        return numero.toString();
    } else if (numero < 1000000) {
        // Si el número es mayor o igual a 1000 y menor a 1000000, convierte a K y redondea a 0 decimales
        return (numero / 1000).toFixed(0) + 'K';
    } else {
        // Si el número es igual o mayor a 1000000, convierte a M y redondea a 1 decimal
        return (numero / 1000000).toFixed(0) + 'M';
    }
}

console.log(likes(983))
console.log(likes(1900))
console.log(likes(54000))
console.log(likes(120800))
console.log(likes(25222444))

