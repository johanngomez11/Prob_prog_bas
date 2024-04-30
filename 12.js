//12.- Hacer un programa que imprima los números del 1 al 100 y que calcule la suma de todos los
//números pares por un lado, y por otro, la de todos los impares.
let pares = 0;
let impares = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {;
        pares += i;
    } else{
        impares += i;
    }
}
console.log("La suma de todos los pares hasta el numero 100 es: " + pares);
console.log("La suma de todos los impares hasta el numero 100 es: " + impares);