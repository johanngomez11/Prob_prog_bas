//27.- Realizar la tabla de multiplicar de un numero entre 0 y 10.
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Introduce un numero para sacar la tabla de multiplicar: ', (numero) => {
    for (let i = 0; i <= 10; i++) {
        console.log(numero + "x" + i + "=" + (numero * i));
    }
    rl.close();
});