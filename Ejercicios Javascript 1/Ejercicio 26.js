
const imprimirMatriz = (array) => {
    for (var i = 0; i < array.length; i++) {
        console.log(array[i])
        for (var x = 0; x < array[i].length; x++) {
            console.log(array[i][x])
        }
    }
}

imprimirMatriz([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
])
