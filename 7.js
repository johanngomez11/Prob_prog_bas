//7.- Introducir tantas frases como queramos y contarlas.
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let contadorFrases = 0;

function leerFrase() {
    rl.question('Introduce una frase (o escribe "fin" para terminar): ', (frase) => {
        if (frase.toLowerCase() === "fin") {
            console.log("La cantidad de frases introducidas es: " + contadorFrases);
            rl.close();
        } else {
            contadorFrases++;
            leerFrase();
        }
    });
}

leerFrase();
