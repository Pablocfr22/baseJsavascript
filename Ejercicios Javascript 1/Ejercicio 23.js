const duplicar = (array) => array.map(item => item * 2)

console.log(duplicar([1, 2, 3]))



function duplicar2(array) {
    let array2 = []
    for (var i = 0; i < array.length; i++) {
        array2.push(array[i] * 2)
    }
    return array2
}

console.log(duplicar2([1, 2, 3]))