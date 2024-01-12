function pares(array) {
    return array.filter(par => par % 2 == 0)
}

console.log(pares([1, 2, 3, 4, 5, 6, 7, 8, 10]))