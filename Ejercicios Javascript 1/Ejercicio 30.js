function numAsteriscos (array){
    let contador = 0
    for (var i = 0; i < array.length; i++){
        console.log(array[i])
        for (var x = 0; x < array[i].length; x++){
            console.log(array[i][x])
            if (array[i][x] === '*'){
                contador++
            }
        }
    }
    return contador
}

console.log(numAsteriscos([
    ['*', '', '*'],
    ['', '*', ''],
    ['*', '', '*']
  ]))