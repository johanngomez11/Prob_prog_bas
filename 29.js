//29.- Simular cien tiradas de dos dados y contar las veces que entre los dos suman 10.
let conteo = 0;
for (let i = 0; i < 100; i++) {
    const dado1 = Math.floor(Math.random() * 6) + 1;
    const dado2 = Math.floor(Math.random() * 6) + 1;
    if (dado1 + dado2 === 10) {
        conteo++;
    }
}
console.log("El número de veces que la suma de los dos dados es 10 es: " + conteo);
