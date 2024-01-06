function esMenorQue(a, b) {
    if (a < b) {
        return true;
    } else {
        return false;
    }
}

console.log(esMenorQue(1, 2))

function esMenorQue2(a, b) {
    return a < b;
}

console.log(esMenorQue2(5, 2))

//PATRON DE RETORNO ANTICIPADO

function miFuncion(){
    console.log('Hola');
    return 'Mundo';
    console.log('Adiós')
}

console.log(miFuncion())

function calcularRaizCuadrada (num){
    if (num < 0){
        return undefined;
    }
    return Math.sqrt(num);
}

console.log(calcularRaizCuadrada(64))