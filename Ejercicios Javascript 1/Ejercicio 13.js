const removerCeros = (arreglo) => {
    return arreglo.filter(numero => numero !== 0)
}

console.log(removerCeros([1, 2, 3, 4, 0, 4, 5]))
console.log(removerCeros([0, 1, 0, 2, 0, 3]))
console.log(removerCeros([9, 3, 6, 4]))
console.log(removerCeros([0, 0, 0]))
