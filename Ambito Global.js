
var miVariableGlobal = 5;

console.log(miVariableGlobal)

//LOCAL
function miFuncion (){
    var miVariableLocal = 4;
    console.log(miVariableLocal)
}
miFuncion()

var miNombre = 'Nora';

function mostrarMiNombre (){
    var miNombre = 'Gino'
    console.log(miNombre)

}

mostrarMiNombre()
console.log(miNombre)