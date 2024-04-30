//18.- Hacer un programa que cuente las veces que aparece una determinada letra en una frase
//que introduciremos por teclado.
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce una frase: ', (frase) => {
    rl.question('Introduce la letra que deseas contar: ', (letra) => {
        let contador = 0;
        for (let i = 0; i < frase.length; i++) {
            if (frase[i].toLowerCase() === letra.toLowerCase()) {
                contador++;
            }
        }
        console.log("La letra '" + letra + "' aparece " + contador + " veces en la frase.");
        rl.close();
    });
});
