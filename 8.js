//8.- Hacer un programa que solo nos permita introducir S o N.
console.log("Si quieres salir en cualquier momento del programa usa ctrl c.");
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function solicitarRespuesta() {
    rl.question("Introduce S o N: ", (input) => {
        let respuesta = input.toUpperCase();
        if (respuesta === 'S' || respuesta === 'N') {
            console.log("Has introducido: " + respuesta);
            solicitarRespuesta();
        } else {
            console.log("Por favor, introduce solo S o N.");
            solicitarRespuesta();
        }
    });
}

solicitarRespuesta();
