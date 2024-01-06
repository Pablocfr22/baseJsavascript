var campista = "James";
var campista = "David";
console.log(campista)


let campista2 = 'James'
campista2 = 'Goku'
console.log(campista2)

//Ambito LET vs VAR
var miVariableGlobal = 4;
console.log(4)

function miFuncion() {
    console.log(miVariableGlobal);

    var miVariableLocal = 8;
    console.log(miVariableLocal);
}

miFuncion()
console.log(miVariableGlobal);
console.log(miVariableLocal);



//SI USAMOS LET LA VARIABLE NO PUEDE SER UTILIZADA FUERA DEL CICLO
for (var i = 0; i < 3; i++) {
    console.log(i)
}

console.log('Variable: ' + i);

var mostrarColor = true;

if(mostrarColor){
    let color = 'verde'
    console.log('Mi color favorito es: ' + color)
}