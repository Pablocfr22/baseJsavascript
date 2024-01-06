function puntajeDeGolf(par, golpes) {
    if (golpes == 1) {
        return 'Hole-in-one'
    } else if (golpes <= par - 2) {
        return 'Eagle';
    } else if (golpes == par - 1) {
        return 'Birdie'
    } else if (golpes == par) {
        return 'Par'
    } else if (golpes == par + 1) {
        return 'Bogey'
    } else if (golpes == par + 2) {
        return 'Double Bogey'
    } else if (golpes >= par + 3) {
        return 'Go Home'
    } else {
        return 'No golpeo'
    }
}

console.log(puntajeDeGolf(4, 2))
console.log(puntajeDeGolf(4, 4))
console.log(puntajeDeGolf(4, 7))
console.log(puntajeDeGolf(4, 6))