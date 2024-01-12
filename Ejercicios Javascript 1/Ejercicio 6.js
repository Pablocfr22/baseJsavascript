function fizzBuzz(numero) {
    return (numero % 5 === 0 && numero % 3 === 0) ? 'fizzbuzz' :
        (numero % 3 === 0) ? 'fizz' :
            (numero % 5 === 0) ? 'buzz' :
                numero;

}

console.log(fizzBuzz(6));
console.log(fizzBuzz(20));
console.log(fizzBuzz(30));
console.log(fizzBuzz(8));

