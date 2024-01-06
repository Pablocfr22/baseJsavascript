function miFuncion(...args) {
    console.log(args);
    console.log(args.length);
}

miFuncion(1, 2, 3, 4, 5, 6)
miFuncion(1, 2, 'Pablo')
miFuncion([1, 2, 3], [4, 5, 6])

const sumar = (...argumentos) => {
    return argumentos.reduce((a, b) => a + b, 0)
};

console.log(sumar(1, 5, 6, 7, 8, 10))