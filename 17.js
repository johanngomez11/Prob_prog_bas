//17.- Imprimir, contar y sumar los múltiplos de 2 que hay entre una serie de números, tal que el
//segundo sea mayor o igual que el primero.
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
    let sumaMultiplos = 0;
    if (inicio > fin){
        console.log("El segundo numero tiene que ser mayor o igual que el primero");
    } else{
        for (let i = inicio; i <= fin; i++) {
            if (i % 2 === 0) {
                console.log(i + " es múltiplo de 2.");
                contador++;
                sumaMultiplos += i;
            };
        };
        console.log("La cantidad de números que son múltiplos de 2 es: " + contador);
        console.log("La suma de los números que son múltiplos de 2 es: " + sumaMultiplos);
    }
    rl.close();
});
