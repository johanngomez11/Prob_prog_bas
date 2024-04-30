//20.- Calcular el factorial de un número, mediante funciones.
// Calcular el factorial de un número
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para calcular el factorial de un número
function factorial(numero) {
    let resultado = 1;
    for (let i = 2; i <= numero; i++) {
        resultado *= i;
    }
    return resultado;
}

// Solicitar al usuario que introduzca el número para calcular su factorial
rl.question('Introduce un número para calcular su factorial: ', (numero) => {
    const factorialNumero = factorial(parseInt(numero));
    console.log("El factorial de " + numero + " es: " + factorialNumero);
    rl.close();
});

