//9.- Introducir un número por teclado y que nos diga si es positivo o negativo.
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Introduce un número: ", (respuesta) => {
    const numero = parseInt(respuesta);
    if (numero > 0) {
        console.log("El número es positivo.");
    } else if (numero < 0) {
        console.log("El número es negativo.");
    } else {
        console.log("El número es cero.");
    }
    rl.close();
});