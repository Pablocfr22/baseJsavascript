function numerosPalabras(numero) {
    const palabras = {
        0: 'cero',
        1: 'uno',
        2: 'dos',
        3: 'tres',
        4: 'cuatro',
        5: 'cinco',
        6: 'seis',
        7: 'siete',
        8: 'ocho',
        9: 'nueve',
    };

    let arreglo = [];
    for (var i = 0; i < numero.length; i++) {
        arreglo.push(palabras[numero[i]] || 'otro');
    }

    return arreglo;
}

console.log(numerosPalabras([0, 1, 2, 3, 4]))
console.log(numerosPalabras([5, 6, 7, 8, 9])) 