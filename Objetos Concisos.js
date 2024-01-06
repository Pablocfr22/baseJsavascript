const crearPersona = (nombre, edad, idioma) => {
    return {
        nombre: nombre,
        edad: edad,
        idioma: idioma
    };
};

console.log(crearPersona('Pablo Flores', 28, 'Español'));


//OTRA FORMA DE CREAR OBJETOS MAS SIMPLE CON FUNCION FLECHA EN UNA SOLA LINEA
const crearPersona2 = (nombre, edad, idioma) => ({nombre, edad, idioma});
console.log(crearPersona2('Cesar Reyes', 28, 'Español'));
