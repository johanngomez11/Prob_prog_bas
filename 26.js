//26.- Introducir una frase por teclado e imprimirla en el centro de la pantalla.
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Introduce una frase: ', (frase) => {
    const anchuraTerminal = process.stdout.columns;
    const margenIzquierdo = (anchuraTerminal - frase.length) / 2;
    let espacios = '';
    for (let i = 0; i < margenIzquierdo; i++) {
        espacios += ' ';
    }
    console.log(espacios + frase);
    rl.close();
});
