let vector = new Array(3);

vector[0] = 'Pablo';
vector[1] = 'Cesar';
vector[2] = 'Flores';
console.log(vector);


let matriz = new Array(3);
for (var i = 0; i < 3; i++) {
    matriz[i] = new Array(3)
}

console.log(matriz);


let persona0 = ['Pablo', 'Flores', 'Reyes']
let persona1 = ['JavaScript', 'Java', 'Phyton']
let persona2 = ['Lenguajes', 'De', 'Programacion']

let matriz2 = [persona0, persona1, persona2];
console.log(matriz2)


//RECORRER ARREGLOS
let paisesLatam = ['Argentina', 'Mexico', 'Colombia', 'Perú'];

for (let i = 0; i < paisesLatam.length; i++) {
    console.log(i)
    console.log(paisesLatam[i])

    if (paisesLatam[i] == 'Perú') {
        console.log('Estoy en mi pais')
    }
}

console.log(paisesLatam)


let paisesEuropa = [
['Francia', 'España', 'Inglaterra', 'Portugal'],
['Alemania', 'Ucrania', 'Hungria', 'San Marino'],
['Suiza', 'Suecia', 'Italia', 'Finlandia']];

for (let f = 0; f < paisesEuropa.length; f++) { //Fila
    for (let c = 0; c < paisesEuropa[f].length; c++) { //Columna
        console.log(paisesEuropa[f][c]);
        if (paisesEuropa[f][c] === 'Alemania') {
            console.log('Culpable Segunda Guerra Mundial')
        }
    }
    
}