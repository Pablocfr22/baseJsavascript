function retornarMinimo(x, y) {
    return x < y ? x : y;
    //SI 'x' es menor que 'Y' retorname 'x' y si no, retorna 'y'.
}
console.log(retornarMinimo(5, 3))
console.log(retornarMinimo(10, 15))
console.log(retornarMinimo(7, 8))


function retornarMinimo2(x, y) {
    if (x < y) {
        return x;
    } else {
        return y;
    }
}
console.log(retornarMinimo2(4, 1))
console.log(retornarMinimo2(8, 25))
console.log(retornarMinimo2(30, 25))


var a = 5;
var b = 9;
console.log (a > b ? a + 2 : b * 3)