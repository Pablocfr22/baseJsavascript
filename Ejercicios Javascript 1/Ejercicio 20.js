const password = (pass) => {
    var passwordArray = pass.toLowerCase().split(' ');
    var password = passwordArray.join('')
    for (var i = 0; i < password.length; i++) {
        password = password.replace('a', 4).replace('e', 3).replace('i', 1).replace('o', 0)
    }
    return password
}

console.log(password('Pablo flores reyes'))
console.log(password("hola"))
console.log(password("esta es una prueba"))
console.log(password(""))
