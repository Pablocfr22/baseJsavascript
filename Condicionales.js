
var x = 5;

if (x > 4) {
    console.log('La condicion es verdadera')
} else {
    console.log('La condicion es falsa')
}

var estacion = 'Invierno'

if (estacion == 'Otoño') {
    console.log('!Si¡, Me encanta el invierno')
} else {
    console.log('!No¡, Yo quiero que sea invierno')
}

function clasificarValor(valor) {
    if (valor % 2 == 0) {
        console.log('Divisible entre 2.')
    } else if (valor % 3 == 0) {
        console.log('Divisible entre 3.')
    } else {
        console.log('No es divisible entre las opciones.')
    }
}

clasificarValor(10000005)
clasificarValor(2)
clasificarValor(21)
clasificarValor(25)

function clasificarValor2(valor){
    if (valor < 5){
        console.log('Menor que 5.')
    } else if (valor < 10){
        console.log('Menor que 10')
    } else {
        console.log('Mayor o igual a 10.')
    }
}

clasificarValor2(112)
clasificarValor2(2)
clasificarValor2(7)

function interpretarIMC(indiceDeMasaCorporal){
    if (indiceDeMasaCorporal < 18.5) {
        console.log('Bajo Peso')
    } else if (indiceDeMasaCorporal <= 24.9){
        console.log('Normal')
    } else if (indiceDeMasaCorporal <=  29.9 ){
        console.log('Sobrepeso')
    } else {
        console.log('Obeso')
    }
}

interpretarIMC(22.5)
interpretarIMC(35)
interpretarIMC(16.2)
interpretarIMC(28)

