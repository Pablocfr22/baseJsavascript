function min(arreglo) {
    var mayor = arreglo[0]
    for (var i = 1; i < arreglo.length; i++){
        if (arreglo[i] < mayor){
            mayor = arreglo[i]
        }
    }
    return mayor
}

console.log(min([3, 9, 6]))
console.log(min([67, 35, 54, 26]))
console.log(min([5, 9, 2, 4, 5, 7]))