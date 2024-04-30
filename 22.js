//22.- Introducir una frase por teclado. Imprimirla cinco veces en filas consecutivas, pero cada
//impresión ir desplazada cuatro columnas hacia la derecha.
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Introduce una frase: ', (frase) => {
    for (let i = 0; i < 5; i++) {
        let espacio = "";
        for (let j = 0; j < i * 4; j++) {
            espacio += " ";
        }
        console.log(espacio + frase);
    }
    rl.close();
});
