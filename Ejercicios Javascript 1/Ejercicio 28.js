function numerosPalabras2(numero) {
    const palabras = {
        'cero': '0',
        'uno': 1,
        'dos': 2,
        'tres': 3,
        'cuatro': 4,
        'cinco': 5,
        'seis': 6,
        'siete': 7,
        'ocho': 8,
       'nueve': 9
    };

    let arreglo = [];
    for (var i = 0; i < numero.length; i++) {
        arreglo.push(palabras[numero[i]] || -1);
    }

    return arreglo;
}

console.log(numerosPalabras2(['cero',"uno", "dos", "tres", "what?", "cuatro", 'cinco','siete','siete']))
console.log(numerosPalabras2(["cinco", "seis", "siete", "ocho", "nueve"]))