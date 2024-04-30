//10.- Introducir un número por teclado y que nos diga si es par o impar.
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Introduce un número: ", (respuesta) => {
    const numero = parseInt(respuesta);
    if (numero % 2 == 0) {
        console.log("El número es par.");
    } else {
        console.log("El número es impar.");
    }
    rl.close();
});