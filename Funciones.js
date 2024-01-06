
function mostrarMensaje() {
    console.log('¡Hola, mundo!')
}
mostrarMensaje();
mostrarMensaje();

function sumar(num1, num2) {
    console.log(`El resultado de ${num1} + ${num2} es: ${num1 + num2}`);
}
sumar(2, 5)

function sumar2(a, b) {
    var suma = a + b;
    console.log('El resultado de ' + a + ' + ' + b + ' es: ' + suma)
}

sumar2(2, 5);
sumar2(100, 32);

var x = 5;
var y = 3;
sumar2(x, y);

function concatenarTresCadenas(cadena1, cadena2, cadena3) {
    console.log(cadena1 + " " + cadena2 + " " + cadena3 + "")
}
concatenarTresCadenas('Estoy','Aprendiendo','a programar')
