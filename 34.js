//34.- Usando el segundo ejemplo, hacer un programa que busque una nota en la lista.
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const nombres = ["David", "Laura", "Johann", "Mia", "Kenia", "Hector", "Karen", "Greta", "Alberto"];

rl.question('Introduce el nombre a buscar: ', (nombreBuscado) => {
    const indice = nombres.indexOf(nombreBuscado);
    if (indice !== -1) {
        console.log("El nombre " + nombreBuscado + " está en la posición " + (indice + 1));
    } else {
        console.log("El nombre " + nombreBuscado + " no está en la lista.");
    }
    rl.close();
});




