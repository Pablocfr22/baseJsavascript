function posiciones(arreglo) {
    return arreglo.reduce((posicionesPares, numero, indice) => {
        if (numero % 2 === 0) {
            posicionesPares.push(indice);
        }
        return posicionesPares;
    }, []);
}

console.log(posiciones([1, 2, 3, 4, 5, 6, 8]))

