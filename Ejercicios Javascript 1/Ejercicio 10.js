function numeroDeCaracteres (string, caracter){
    var contador = 0
    for (i = 0; i < string.length; i++){
        if (string[i] == caracter){
            contador++
        }
    }
    return contador
}   

console.log(numeroDeCaracteres('pablo','o'))
console.log(numeroDeCaracteres("Hola Mundo", "o")) 
console.log(numeroDeCaracteres("MMMMM", "m")) 
console.log(numeroDeCaracteres("eeee", 'e'))