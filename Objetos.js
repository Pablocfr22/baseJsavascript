var miPerro = {
    'nombre': 'Gino',
    'edad': 5,
    'peso': 6,
    'raza': 'Beagle'
};

console.log(miPerro.nombre);
console.log(miPerro.edad);

var miCuaderno = {
    'color': 'Verde',
    'categoria': 3,
    'numero de paginas': 200,
    'numero de hojas': 100
}

console.log(miCuaderno.categoria);
console.log(miCuaderno['numero de hojas']);

var resultados = {
    1: 'nora256',
    2: 'gino577',
    3: 'estef534',
    4: 'kiara566'
}

var posicion = 4;
console.log(resultados[posicion]);


//CAMBIAR VALORES DE OBJETOS
var mochila = {
    'color': 'azul',
    'tamaño': 'mediano',
    'contenido': ['botella de agua', 'cuaderno']
}

console.log(mochila.color);
mochila.color = 'verde';
console.log(mochila.color);

console.log(mochila.contenido);
mochila.contenido.push('lapiz');
console.log(mochila.contenido);

mochila.contenido = [];
mochila.contenido.push('borrado','tajador','tijeras');
console.log(mochila.contenido);


//AGREGAR PROPIEDADES
var curso = {
    'titulo': 'Aprende JavaScript desde Cero',
    'idioma': 'Español',
    'duracion': 30
};

curso.vistas = 34500;
console.log(curso)


//ELIMINAR PROPIEDADES DE UN OBJETO
var curso2 = {
    'titulo': 'Aprende JavaScript desde Cero',
    'idioma': 'Español',
    'duracion': 30
};

delete curso2.duracion;
console.log(curso2);


//OBJETOS PARA BUSQUEDAS
//BUSCAQUEDA CON SENTENCIA SWITCH
function buscarElementoQuimico(simbolo){
    var elementoQuimico = '';

    switch(simbolo){
        case 'Al':
            elementoQuimico = 'Aluminio'
            break;
        case 'S':
            elementoQuimico = 'Azufre';
            break;
        case 'Cl':
            elementoQuimico = 'Cloro';
            break;
        case 'He':
            elementoQuimico = 'Helio';
            break;
        case 'B':
            elementoQuimico = 'Boro';
            break;
        case 'Li':
            elementoQuimico = 'Litio'
            break;
    }
    return elementoQuimico
}
console.log(buscarElementoQuimico('Al'))


//BUSQUEDA CON OBJETOS
function buscarElementoQuimico2(simbolo){
    var simbolosQuimicos = {
        'Al': 'Aluminio',
        'S': 'Azufre',
        'Cl': 'Cloro',
        'He': 'Helio',
        'B': 'Boto',
        'Li': 'Litio'
    };
    return simbolosQuimicos[simbolo];
}

console.log(buscarElementoQuimico2('Al'))
console.log(buscarElementoQuimico2('S'))
console.log(buscarElementoQuimico2('Cl'))


//VERIFICAR PROPIEDADES
var miCuaderno3 = {
    'color': 'Verde',
    'categoria': 3,
    'precio': 4.56
};

console.log(miCuaderno3.hasOwnProperty('color')); //VERIFICA PROPIEDADES
console.log(miCuaderno3.hasOwnProperty('categoria'));
console.log(miCuaderno3.hasOwnProperty('tamaño'));

function verificarPropiedad(obj, propiedad){
    if(obj.hasOwnProperty(propiedad)){
        return 'Propiedad: ' + obj[propiedad];
    }else {
        return 'El objeto no tiene esta propiedad';
    }
}

var miBook = {
    'color': 'Verde',
    'categoria': 3,
    'precio': 4.56
};

console.log(verificarPropiedad(miBook,"color"));
console.log(verificarPropiedad(miBook,"tamaño"));