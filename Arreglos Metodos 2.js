//PUSH
let array1 = [5, 2, 4, 3, 2, 1];
array1.pop(8)
console.log(array1)

//POP
let array2 = [5, 2, 4, 3, 2, 1];
array2.pop()
console.log(array2)

//UNSHIFT
let array3 = [5, 2, 4, 3, 2, 1];
array3.unshift(9)
console.log(array3)

//SHIFT
let array4 = [5, 2, 4, 3, 2, 1];
array4.shift()
console.log(array4)

//SPLICE
let array5 = [5, 2, 4, 3, 2, 1];
array5.splice(1, 3)
console.log(array5)
array5.splice(1, 3, 0, 0, 0, 0)
console.log(array5)

//SLICE
let array6 = [5, 2, 4, 3, 2, 1];
let result6 = array6.slice(1, 3)
console.log(result6)
console.log(array6)

//CONCAT
let array7 = [1, 2, 3];
let strings = ['one', 'two', 'three'];
let newarray = array7.concat(strings);
console.log(newarray)

//INDEXOF
let array8 = ['one', 'two', 'three'];
console.log(array8.indexOf('two'))

//INCLUDES
let array9 = ['one', 'two', 'three'];
console.log(array9.includes('one'))

if (array9.includes('two')) {
    console.log(true)
} else {
    console.log(false)
}

//FIND
let array10 = [
    { id: 1, name: 'Jhon' },
    { id: 2, name: 'Celine' },
    { id: 3, name: 'Marine' }
];
let result10 = array10.find(item => item.id == 3);
console.log(result10)

//FINDINDEX
let array11 = [
    { id: 1, name: 'Jhon' },
    { id: 2, name: 'Celine' },
    { id: 3, name: 'Marine' }
];
let result11 = array11.findIndex(index => index.name == 'Celine')
console.log(result11)

//FILTER
let array12 = [
    { id: 1, name: 'Jhon' },
    { id: 2, name: 'Celine' },
    { id: 3, name: 'Marine' }
];
let result12 = array12.filter(item => item.id <= 2)
console.log(result12)

//FOREACH
let array13 = [5, 2, 4, 3, 2, 1];
let resultado13 = []
array13.forEach(item => resultado13.push(item * 10))
console.log(resultado13)

array13.forEach(item => console.log(item)); //DEBERIA FUNCIONAR
array13.forEach(item => { console.log(item) }) //RECORRER ARRAY CON METODO

for (i = 0; i < array13.length; i++) { //RECORRER ARRAY CON FOR
    console.log(array13[i])
}

//MAP
let array14 = [5, 2, 4, 3, 2, 1];
let result14 = array14.map(item => item * 10);
console.log(result14)

//SORT
let array15 = [5, 2, 10, 3, 1];
array15.sort()
console.log(array15);

array15.sort((a, b) => a - b)
console.log(array15);

//REVERSE
let array16 = [5, 2, 10, 3, 1];
array16.reverse()
console.log(array16)

array16.sort((a, b) => a - b).reverse()
console.log(array16)

//SPLIT
let string = 'amanecer'
let result17 = string.split('e')
console.log(result17)

let result18 = string.split('')
console.log(result18)

//JOIN
let array18 = ['one', 'two', 'three'];
let result19 = array18.join('/')
console.log(result19)

//REDUCE
let array19 = [5, 2, 6, 3, 20, 21, 17];
let result20 = array19.reduce((sum, index) => sum + index, 0) //SUMA DE ELEMENTOS EN UN ARRAY (EL 0 ES EL ACUMULADOR Y ES UN NUMERO QUE SE SUMA CON LOS DEMAS)
console.log(result20)

let result21 = array19.reduce((a, b) => (a > b ? a : b)); //ENCONTRAR NUMERO MAYOR O MENOR
console.log(result21);


