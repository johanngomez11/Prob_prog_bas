//33.- Hacer un programa que lea las calificaciones de un alumno en 10 asignaturas, las almacene
//y calcule e imprima su media.
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let totalCalificaciones = 0;
let contador = 0;

rl.question('Introduce las calificaciones separadas por espacio: ', (input) => {
    const calificaciones = input.split(' ');

    for (let i = 0; i < calificaciones.length; i++) {
        totalCalificaciones += parseFloat(calificaciones[i]);
        contador++;
    }

    const media = totalCalificaciones / contador;
    console.log("La media de las calificaciones es: " + media);
    rl.close();
});
