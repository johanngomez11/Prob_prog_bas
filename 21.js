//21.- Hacer un programa que calcule independientemente la suma de los pares y los impares de
//los números entre 1 y 1000.
let sumPares = 0;
let sumImpares = 0;

for(let i=1; i <= 1000; i++){
    if(i % 2 == 0){
        sumPares += i;
    } else{
        sumImpares += i;
    }
}

console.log("La suma de los pares entre los numeros del 1 al 1000 es: " + sumPares);
console.log("La suma de los pares entre los numeros del 1 al 1000 es: " + sumImpares);