const fecha = function () {
    return new Date();
}
const fecha2 = () => new Date();



const sumarTres = function (x){
    return x + 3;
}
const sumarTres2 = (x) => x + 3;
console.log(sumarTres2(4))



const concatenar = (arre1, arre2) => arre1.concat(arre2)

console.log(concatenar([1,2,3,4,],[5,6,7,8]))



const sumar =  (a, b) => {
    let num = 6;
    return a + b + num;
}

console.log(sumar(1,5))
