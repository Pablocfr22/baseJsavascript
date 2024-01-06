//El valor de una propiedad es una función se denomina "Método"

const persona = {
    nombre: 'Isabel',
    presentarse: function () {
        return `Hola, mi nombre es ${this.nombre}` //LA PALABRA 'This' Se refiere a un objeto con el que estamos trabajando
    }
};

console.log(persona.presentarse())


//OTRA FORMA

const persona2 = {
    nombre: 'Pablo',
    presentarse() { //OTRA FORMA DE COLOCAR UNA FUNCION DENTRO DE UN OBJETO
        return `Hola, mi nombre es ${this.nombre}` //LA PALABRA 'This' Se refiere a un objeto con el que estamos trabajando
    }
};

console.log(persona2.presentarse())