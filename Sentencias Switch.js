function clasificarValor(valor) {
    var respuesta;
    switch (valor) {
        case 1:
            respuesta = 'alpha';
            break;
        case 2:
            respuesta = 'beta';
            break;
        case 3:
            respuesta = 'gamma';
            break;
        case 4:
            respuesta = 'delta'
            break;
    }
    return respuesta
}

console.log(clasificarValor(1))
console.log(clasificarValor(2))
console.log(clasificarValor(3))

var producto = 'hamburguesa';

switch (producto) {
    case 'pizza':
        console.log('La piza básica cuesta $10.55')
        break;
    case 'hamburguesa':
        console.log('Las hamburguesas cuestan $6.58')
        break;
    case 'helado':
        console.log('El helado cuesta $2.8');
        break;
}
console.log('Luego se Switch')


function fastFood(valor) {
    switch (valor) {
        case 'pizza':
            return 'La piza básica cuesta $10.55'
            break;
        case 'hamburguesa':
            return 'Las hamburguesas cuestan $6.58'
            break;
        case 'helado':
            return 'El helado cuesta $2.8';
            break;
    }
    return 'Producto no encontrado'
}

console.log(fastFood('hamburguesa'))

function seleccionarIdioma(valor) {
    var idioma;
    switch (valor) {
        case 1:
            idioma = 'Español';
            break;
        case 2:
            idioma = 'Frances';
            break;
        case 3:
            idioma = 'Italiano';
            break;
        default: idioma = 'Ingles'
            break;
            
    }
    return idioma
}

console.log(seleccionarIdioma(2))

function seleccionarIdioma2(valor) {
    var idioma;
    if (valor == 1){
        idioma = 'Español'
    } else if (valor == 2){
        idioma = 'Frances'
    } else if (valor == 3){
        idioma = 'Italiano'
    } else {
        idioma = 'Inglés'
    }
    return idioma
}

console.log(seleccionarIdioma2(1))

function clasificarVolumen(valor) {
    var volumen;
    switch (valor) {
        case 1:
            volumen = 'bajo'
            break;
        case 2: 
        case 3:
            volumen = 'intermedio'
            break;
        case 4: case 5: case 6:
            volumen = 'alto';
            break;
    }
    return volumen;
}

console.log(clasificarVolumen(4))

