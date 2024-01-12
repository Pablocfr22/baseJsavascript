const empiezanConA = (palabra) => {
    return palabra.filter(palabra => palabra.charAt(0) == 'a' || palabra.charAt(0) == 'A')
}

console.log(empiezanConA(["beta", "alfa", "Arbol", "gama"]))
console.log(empiezanConA(["beta", "delta", "gama"]))
console.log(empiezanConA([]))




function empiezaConA2(palabra) {
    let array = []
    for (var i = 0; i < palabra.length; i++) {
        if (palabra[i][0] == 'a' || palabra[i][0] == 'A') {
            array.push(palabra[i])
        }
    }
    return array
}
console.log(empiezaConA2(["beta", "alfa", "Arbol", "gama"]))
console.log(empiezaConA2(["beta", "delta", "gama"]))
console.log(empiezaConA2([]))