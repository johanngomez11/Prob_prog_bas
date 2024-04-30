//14.- Hacer un programa que imprima el mayor y el menor de una serie de cinco números que
//vamos introduciendo por teclado.
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let array = [];
rl.question('Introduce cinco números separados por espacios: ', (input) => {
    numeros = input.split(' ');
    for (let i = 0; i < numeros.length; i++) {
        array[i] = parseInt(numeros[i]);
    }
    let maximo = array[0];
    let minimo = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maximo) {
            maximo = array[i];
        }
        if (array[i] < minimo) {
            minimo = array[i];
        }
    }
    console.log("El número mayor es: " + maximo);
    console.log("El número menor es: " + minimo);
    rl.close();
});
