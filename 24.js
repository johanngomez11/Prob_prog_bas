//24.- Comprobar si un número mayor o igual que la unidad es primo.
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para comprobar si un número es primo
function esPrimo(numero) {
    if (numero < 2) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

// Solicitar al usuario que introduzca el número a comprobar
rl.question('Introduce un número entero positivo mayor que 1: ', (numero) => {
    if (esPrimo(parseInt(numero))) {
        console.log(numero + " es un número primo.");
    } else {
        console.log(numero + " no es un número primo.");
    }
    rl.close();
});
