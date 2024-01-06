var coleccionDiscos = {
    7853: {
        tituloDelAlbum: 'Bee Gees Greatest',
        artista: 'Bee Gees',
        canciones: ["Stayin' Alive"]
    },
    5439: {
        tituloDelAlbum: 'ABBA Gold'
    }
};

function actualizarDiscos(discos, id, propiedad, valor) {
    if (valor === "") {
        delete discos[id][propiedad];
    } else if (propiedad === 'canciones') {
        discos[id][propiedad] = discos[id][propiedad] || [];
        discos[id][propiedad].push(valor);
    } else {
        discos[id][propiedad] = valor;
    }
}

console.log(coleccionDiscos[7853].tituloDelAlbum);
actualizarDiscos(coleccionDiscos, 7853, "tituloDelAlbum", "");
console.log(coleccionDiscos[7853].tituloDelAlbum);



console.log(coleccionDiscos[5439].canciones);
actualizarDiscos(coleccionDiscos, 5439, "canciones", "Mamma Mia");
console.log(coleccionDiscos[5439].canciones);

actualizarDiscos(coleccionDiscos, 5439, "artista", "ABBA");
console.log(coleccionDiscos[5439].artista);



