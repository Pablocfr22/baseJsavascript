var contactos = [
    {
        nombre: 'Nora',
        apellido: 'Nav',
        numero: '0543236543',
        gustos: ['Pizza', 'Programación']
    },
    {
        nombre: 'Harry',
        apellido: 'Potter',
        numero: '0994372584',
        gustos: ['Hogwarts', 'Magia']
    },
    {
        nombre: 'Sherlock',
        apellido: 'Holmes',
        numero: '0487345643',
        gustos: ['Casos interesantes', 'Violín']
    }
];

// Función para buscar el perfil de un contacto por nombre y propiedad
function buscarPerfil(nombre, propiedad) {
    // Iterar a través de la lista de contactos
    for (var i = 0; i < contactos.length; i++) {
        // Verificar si el nombre del contacto coincide con el nombre proporcionado
        if (contactos[i].nombre === nombre) {
            // Devolver el valor de la propiedad especificada o un mensaje si la propiedad no existe
            return contactos[i][propiedad] || "La propiedad no existe.";
        }
    }
    // Si no se encuentra el contacto con el nombre proporcionado, devolver un mensaje indicando que el contacto no está en la lista
    return "El contacto no está en la lista de contactos.";
}

console.log(buscarPerfil('Nora', 'gustos'));
console.log(buscarPerfil('Nora', 'direccion'));
console.log(buscarPerfil('Harry', 'apellido'));
console.log(buscarPerfil('Sherlock', 'numero'));
console.log(buscarPerfil('Pablo', 'numero'));