//31.- Hacer un programa que nos permita introducir un número por teclado y sobre él se realicen
//las siguientes operaciones: comprobar si es primo, hallar su factorial o imprimir su tabla de
//multiplicar.
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Introduce un número: ', (numero) => {
    numero = parseInt(numero);

    // Comprobar si el número es primo
    let esPrimo = true;
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            esPrimo = false;
            break;
        }
    }
    if (esPrimo) {
        console.log(numero + " es un número primo.");
    } else {
        console.log(numero + " no es un número primo.");
    }

    // Calcular el factorial del número
    let factorial = 1;
    for (let i = 2; i <= numero; i++) {
        factorial *= i;
    }
    console.log("El factorial de " + numero + " es: " + factorial);

    // Imprimir la tabla de multiplicar del número
    console.log("Tabla de multiplicar de " + numero + ":");
    for (let i = 1; i <= 10; i++) {
        console.log(numero + " x " + i + " = " + (numero * i));
    }

    rl.close();
});
