var ordenesDePizzas = [
    {
        'tipo': 'margarita',
        'tamaño': 'individual',
        'precio': 5.67,
        'toppings': [
            'extra queso',
            'champiñones',
            'piña'
        ],
        'paraLlevar': true
    },
    {
        'tipo': 'cuatro quesos',
        'tamaño': 'familiar',
        'precio': 18.34,
        'toppins': [
            'extra queso',
            'pimenton'
        ],
        'paraLlevar': false
    },
    {
        'tipo': 'napolitana',
        'tamaño': 'individual',
        'precio': 6.78,
        'toppings': [],
        'paraLlevar': true
    }
];

console.log(ordenesDePizzas[0].toppings[0]);

console.log(ordenesDePizzas[1]);

console.log(ordenesDePizzas[2]);

ordenesDePizzas[2].toppings.push('Mozarella', 'Aceituna')
console.log(ordenesDePizzas[2]);

ordenesDePizzas.push({
    'tipo': 'Hawaiana',
    'tamaño': 'Mediana',
    'precio': 9.90,
    'toppings': [],
    'paraLlevar': false
})
console.log(ordenesDePizzas[3]);
