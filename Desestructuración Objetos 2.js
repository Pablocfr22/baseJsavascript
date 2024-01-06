var nuevoPerfilCliente = {
    nombre: 'Pablo Flores',
    edad: 24,
    nacionalidad: 'Peruano',
    ubicacion: 'Peru'
}

const actualizarPerfil = (informacionDePerfil) =>{
    const {nombre, edad, nacionalidad, ubicacion} = informacionDePerfil;
    console.log(nombre)
    console.log(edad)
    console.log(nacionalidad)
    console.log(ubicacion)
};

actualizarPerfil(nuevoPerfilCliente);


const actualizarPerfil2 = ({nombre,edad,nacionalidad}) =>{
    console.log(nombre)
    console.log(edad)
    console.log(nacionalidad)
};

actualizarPerfil2(nuevoPerfilCliente);



const estadisticas = {
    max: 56.78,
    desviacionEstandar: 4.34,
    mediana: 34.54,
    moda: 23.87,
    min: -0.75,
    promedio: 35.85
}

const mitad = ({max, min}) => (max + min) / 2.0;
console.log(mitad(estadisticas))