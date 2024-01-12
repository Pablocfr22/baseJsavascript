const terminanConS = (palabra) => {
    return palabra.filter(palabra => palabra.charAt(palabra.length -1) == 's' || palabra.charAt(palabra.length -1) == 'S')
}

console.log(terminanConS(["pruebas", "arroz", "árbol", "tokens"]))
console.log(terminanConS(["beta", "delta", "gama"]))
console.log(terminanConS([]))


function terminanConS2(palabra) {
    let array = []
    for (var i = 0; i < palabra.length; i++) {
        let ultimaLetra = palabra[i][palabra[i].length - 1].toLowerCase();
        if (ultimaLetra == 's') {
            array.push(palabra[i]);
        }
    }
    return array
}
console.log(terminanConS2(["pruebas", "arroz", "árbol", "tokens"]))
console.log(terminanConS2(["beta", "delta", "gama"]))
console.log(terminanConS2([]))
