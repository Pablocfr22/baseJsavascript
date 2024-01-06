var miArreglo = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

for (var i = 0; i < miArreglo.length; i++) {
    var arregloAnidado = miArreglo[i]; //Arreglo
    
    for (var j = 0; j < arregloAnidado.length; j++) {
        console.log(arregloAnidado[j]); //Elemento
    }
}