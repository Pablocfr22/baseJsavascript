const numAsteriscos = (array) =>{
    let contador = 0
    for (var i = 0; i < array.length; i++){
        if (array[i] == '*'){
            contador++
        }
    }
    return contador
}

console.log(numAsteriscos(['', '*', '', '*']))
console.log(numAsteriscos(['*', '*', '*']))
console.log(numAsteriscos([]))