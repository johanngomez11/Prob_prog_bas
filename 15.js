//15.- Introducir dos números por teclado. Imprimir los números naturales que hay entre ambos
//números empezando por el más pequeño, contar cuántos hay y cuántos de ellos son pares.
//Calcular la suma de los impares.
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce dos números separados por espacios: ', (input) => {
    const numeros = input.split(' ');
    const inicio = parseInt(numeros[0]);
    const fin = parseInt(numeros[1]);
    let contador = 0;
    let contadorPares = 0;
    let sumaImpares = 0;
    for (let i = inicio; i <= fin; i++) {
        console.log(i);
        contador++;
        if (i % 2 === 0) {
            contadorPares++;
        } else {
            sumaImpares += i;
        }
    }
    console.log("La cantidad de números naturales es: " + contador);
    console.log("La cantidad de números pares es: " + contadorPares);
    console.log("La suma de los números impares es: " + sumaImpares);
    rl.close();
});