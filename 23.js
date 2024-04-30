//23.- Hacer un programa que imprima los números del 0 al 100, controlando las filas y las columnas.
let contador = 0;
for (let i = 0; i <= 10; i++) {
    let fila = "";
    for (let j = 0; j <= 10; j++) {
        fila += contador.toString().padStart(3, ' ') + " ";
        contador++;
    }
    console.log(fila);
}
