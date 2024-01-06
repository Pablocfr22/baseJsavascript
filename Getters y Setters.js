class Libro {
    constructor(autor){
        this._autor = autor; //El 'this._' proteje la propiedad.
    }

    get autor (){ //Permite mostrar la propiedad protegida
        return this._autor;
    }

    set autor (nuevoAutor){ //Permite modificar el valor de una propiedad
        this._autor = nuevoAutor;
    }
}

//SE PUEDE REALIZAR GRACIAS A GETTER
const libro = new Libro('Anonimo');
console.log(libro.autor)

//SE PUEDE REALIZAR GRACIAS A SETTER
libro.autor = 'Pablo Flores'
console.log(libro.autor)