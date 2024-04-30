//45.- Tenemos el archivo DATOS.DAT con la misma estructura anterior, que esta indexado por el
//campo ID. Crear un programa que nos permita consultar un registro siempre que queramos.
const fs = require('fs');
const readline = require('readline');

function consultarRegistroPorID(id) {
    fs.readFile('DATOS.DAT', 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo DATOS.DAT:', err);
            return;
        }
        const lineas = data.split('\n');
        const registro = lineas.find(linea => {
            const campos = linea.split(',');
            return campos[0] === id.toString();
        });
        if (registro) {
            console.log('Registro encontrado:');
            console.log(registro);
        } else {
            console.log('No se encontró ningún registro con el ID proporcionado.');
        }
    });
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Introduce el ID del registro a consultar: ', (id) => {
    consultarRegistroPorID(id);
    rl.close();
});