const usuario = {
    nombre: 'Gino Smith',
    edad2: 34
};

//const nombre2 = usuario.nombre
//const edad2 = usuario.edad
const { nombre, edad2} = usuario;
console.log(nombre, edad2)

var coordenadas = {
    x: 4,
    y: 6,
    z: 12
}

const { x, y, z } = coordenadas;
console.log(x)
console.log(y)
console.log(z)


//DESESTRUCTURACION PARA OBJETOS ANIDADOS
const usuario2 = {
    johnDoe: {
        edad: 27,
        correo: 'Pablocfr22@gmail.com'
    }
};

const {johnDoe: {edad: edadDelUsuario, correo: correoDelUsuario}} = usuario2

console.log(edadDelUsuario);
console.log(correoDelUsuario)



const PRONOSTICO_LOCAL = {
    ayer: {
        minima: 61,
        maxima: 75
    },
    hoy: {
        minima: 64,
        maxima: 77
    },
    mañana: {
        minima: 68,
        maxima: 80
    }
};

var {hoy: {minima: minimaHoy, maxima: maximaHoy}} = PRONOSTICO_LOCAL
console.log(minimaHoy)
console.log(maximaHoy)

minimaHoy = 99
console.log(minimaHoy)

const {ayer: {minima: minimaAyer, maxima: maximaAyer}} = PRONOSTICO_LOCAL
console.log(minimaAyer)
console.log(maximaAyer)

const {mañana: {minima: minimaMañana, maxima: maximaMañana}} = PRONOSTICO_LOCAL
console.log(minimaMañana)
console.log(maximaMañana)

