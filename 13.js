//13.- Imprimir y contar los números que son múltiplos de 2 o de 3 que hay entre 1 y 100.
let contadorMultiplos = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0 || i % 3 === 0) {
        console.log(i + " es múltiplo de 2 o de 3.");
        contadorMultiplos++;
    }
}
console.log("La cantidad de números que son múltiplos de 2 o de 3 entre el 1 y el 100 es: " 
+ contadorMultiplos);