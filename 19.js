//19.- Hacer un programa que simule el funcionamiento de un reloj digital y que permita ponerlo en hora.
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ponerEnHora(hora) {
    console.log("El reloj ha sido puesto en hora. La hora actual es: " + hora);
    rl.close();
}

rl.question('Introduce la hora (formato HH:MM:SS): ', (hora) => {
    ponerEnHora(hora);
});
