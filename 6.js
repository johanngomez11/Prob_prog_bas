//6.- Hacer un programa que imprima todos los números naturales que hay desde el uno hasta un
//número que introducimos por teclado.
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce el número hasta el que quieres imprimir: ', (respuesta) => {
  const limite = parseInt(respuesta);
  for (let i = 1; i <= limite; i++) {
    console.log(i);
  }
  rl.close();
});
