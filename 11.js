//11.- Imprimir y contar los múltiplos de 3 desde el uno hasta un número que introducimos por teclado.
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce un número: ', (respuesta) => {
    const limite = parseInt(respuesta);
    let contadorMultiplos3 = 0;
    for (let i = 1; i <= limite; i++) {
        if (i % 3 == 0) {
            console.log(i);
            contadorMultiplos3++;
        }
    }
    console.log("La cantidad de múltiplos de 3 hasta " + limite + " es: " + contadorMultiplos3);
    rl.close();
});