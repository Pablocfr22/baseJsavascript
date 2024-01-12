const bmi = (peso, altura) =>{
    var calculo = peso / (altura * altura);

    if (calculo < 18.5){
        return 'Bajo de peso'
    } else if (calculo >= 18.5 && calculo <= 24.9){
        return 'Normal'
    }else if (calculo >= 25 && calculo <= 29.9){
        return 'Sobrepreso'
    }else if (calculo > 30){
        return 'Obeso'
    }
}

console.log(bmi(65, 1.8))
console.log(bmi(72, 1.6))
console.log(bmi(52, 1.75))
console.log(bmi(135, 1.7))


const bmi2 = (peso, altura) => {
    var calculo = peso / (altura * altura);

    return (calculo < 18.5) ? 'Bajo de peso' :
           (calculo >= 18.5 && calculo <= 24.9) ? 'Normal' :
           (calculo >= 25 && calculo <= 29.9) ? 'Sobrepeso' :
           (calculo > 30) ? 'Obeso' :
           'Valor no válido';
};

console.log(bmi2(65, 1.8))
console.log(bmi2(72, 1.6))
console.log(bmi2(52, 1.75))
console.log(bmi2(135, 1.7))



