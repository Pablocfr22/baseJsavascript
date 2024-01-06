
class TransbordadorEspacial {
    constructor(planeta, tamaño){
        this.planeta = planeta,
        this.tamaño = tamaño;
    }
};

var zeus = new TransbordadorEspacial('Júpiter');
console.log(zeus)
console.log(zeus.planeta)

var ares = new TransbordadorEspacial('Marte', '5433 Km');
console.log(ares)
console.log(ares.planeta)
console.log(ares.tamaño)



class Mascota {
    constructor(nombre, edad){
        this.nombre = nombre,
        this.edad = edad;
    }
};

var mascota1 = new Mascota('Dara', 50);
console.log(mascota1)
console.log(mascota1.nombre)