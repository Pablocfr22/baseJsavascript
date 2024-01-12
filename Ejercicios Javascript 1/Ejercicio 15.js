function transcribir(string) {
    var resultado = ''
    for (var i = 0; i < string.length; i++) {
        if (string[i] == 'A') {
            resultado += 'U'
        } else if (string[i] == 'C') {
            resultado += 'G'
        } else if (string[i] == 'G') {
            resultado += 'C'
        } else if (string[i] == 'T') {
            resultado += 'A'
        }
    }
    return resultado
}

console.log(transcribir('ACGT'))