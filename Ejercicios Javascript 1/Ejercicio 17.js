const capitalizarPalabras = (string) => {
    return string
        .split(' ')
        .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1))
        .join(' ');
}

console.log(capitalizarPalabras('pablo flores reyes'))