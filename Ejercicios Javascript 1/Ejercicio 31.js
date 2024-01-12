// Definimos la función distancia que toma dos strings como parámetros
function distancia(str1, str2) {
    // Inicializamos una variable para contar la diferencia
    let diferencia = 0;

    // Iteramos sobre cada posición de los strings
    for (let i = 0; i < str1.length; i++) {
        // Comparamos los caracteres en la posición actual de ambos strings
        // Si son diferentes, incrementamos la diferencia
        if (str1[i] !== str2[i]) {
            diferencia++;
        }
    }

    // Si quieres considerar la diferencia de longitud, puedes sumar la diferencia de longitudes a la cuenta
    // Usamos Math.abs para obtener el valor absoluto de la diferencia de longitudes
    diferencia += Math.abs(str1.length - str2.length);

    // Retornamos la cantidad total de caracteres diferentes
    return diferencia;
}

// Código de prueba
// Comprobamos la función con diferentes pares de strings
console.log(distancia("hola", "hola")); // 0
console.log(distancia("sol", "tol")); // 1
console.log(distancia("carro", "correr")); // 3
