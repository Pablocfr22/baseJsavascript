const numeroDeA = (palabra) => {
    let contador = 0
    for (i = 0; i < palabra.length; i++) {
        if (palabra[i] == 'a'){
            contador++
        }
    }
    return contador
}

console.log((numeroDeA('abracadabra')))
console.log(numeroDeA("etinol")) 
console.log(numeroDeA(""))
console.log(numeroDeA("pablocesafloresreyes"))
