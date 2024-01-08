//ARRAY PARA NOMBRES
let nombresPokemon = ['Charmander', 'Pikachu', 'Bulbasaur', 'Squirtle'];

//MATRIZ PARA HABILIDADES
let habilidades = [
    [80, 75, 90], //Charmander
    [65, 55, 95], //Pikachu
    [80, 70, 65], //Bulbasaur
    [10, 90, 70] //Squirtle
];

function calcularPromedioHabilidad(habilidades) {
    let promedios = [];

    for (let i = 0; i < habilidades.length; i++) {
        let fila = habilidades[i]
        let suma = fila.reduce((total, habilidad) => total + habilidad, 0)
        promedios[i] = suma / fila.length;
    }
    return promedios
}

function evaluarAptitud (nombres, promedios){

    for (let i = 0; i < promedios.length; i++){
        if (promedios[i]>=70){
            console.log('El Pokemon' + nombres[i] + ' Supera el promedio con: ' + promedios[i])
        } else {
            console.log('El Pokemon' + nombres[i] + ' No supera el promedio con: ' + promedios[i])
        }
    }
}

let promedios = calcularPromedioHabilidad(habilidades);
console.log(promedios);

evaluarAptitud(nombresPokemon,promedios)

