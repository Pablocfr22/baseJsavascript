// Array de objetos para representar a cada Pokémon con sus habilidades
let pokemones = [
    { nombre: 'Charmander', habilidades: [80, 75, 90] },
    { nombre: 'Pikachu', habilidades: [65, 55, 95] },
    { nombre: 'Bulbasaur', habilidades: [80, 70, 65] },
    { nombre: 'Squirtle', habilidades: [10, 90, 70] }
];

// Función para calcular el promedio de habilidades para cada Pokémon
function calcularPromedioHabilidad(pokemones) {
    // Utilizamos map para transformar el array de pokemones a un array de promedios
    return pokemones.map(pokemon => {
        // Calculamos la suma de habilidades usando reduce
        let suma = pokemon.habilidades.reduce((total, habilidad) => total + habilidad, 0);
        // Calculamos el promedio y lo devolvemos
        return suma / pokemon.habilidades.length;
    });
}

// Función para evaluar la aptitud de cada Pokémon según sus promedios de habilidades
function evaluarAptitud(pokemones, promedios) {
    // Iteramos sobre cada Pokémon
    for (let i = 0; i < promedios.length; i++) {
        // Verificamos si el promedio supera o no los 70
        if (promedios[i] >= 70) {
            console.log('El Pokémon ' + pokemones[i].nombre + ' supera el promedio con: ' + promedios[i]);
        } else {
            console.log('El Pokémon ' + pokemones[i].nombre + ' no supera el promedio con: ' + promedios[i]);
        }
    }
}

// Llamamos a la función para calcular promedios y almacenamos los resultados
let promedios = calcularPromedioHabilidad(pokemones);

// Imprimimos los promedios en la consola
console.log(promedios);

// Llamamos a la función para evaluar aptitud y mostramos los resultados en la consola
evaluarAptitud(pokemones, promedios);
