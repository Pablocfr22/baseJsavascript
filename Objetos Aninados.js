var miReceta = {
    'descripcion': 'Mi postre favorito',
    'costo': 15.6,
    'ingredientes': {
        'masa': {
            'harina': '100gr.',
            'sal': '1 cucharadita',
            'agua': '1 taza'
        },
        'cobertura': {
            'azucar': '120 gr.',
            'chocholate': '4 cucharadas',
            'mantequilla': '200 gr.'
        }
    }
};

console.log(miReceta['descripcion']);
console.log(miReceta.costo);
console.log(miReceta.ingredientes);

console.log(miReceta['ingredientes']['masa']);
console.log(miReceta.ingredientes.masa.harina);

console.log(miReceta.ingredientes.cobertura);
console.log(miReceta['ingredientes'].cobertura.chocholate)