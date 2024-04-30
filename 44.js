
//44.- Con el archivo DATOS.DAT listar todos los registros cuyo estado sea uno determinado que
//introduciremos por teclado.const fs = require('fs');
const fs = require('fs');
const readline = require('readline');

function listarRegistrosPorEstado(estado) {
    fs.readFile('DATOS.DAT', 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo DATOS.DAT:', err);
            return;
        }
        const lineas = data.split('\n');
        const registros = lineas.map(linea => linea.split(','));
        const registrosFiltrados = registros.filter(registro => registro[4] === estado);
        console.log("Registros con estado", `${estado}`);
        registrosFiltrados.forEach(registro => {
            console.log(registro.join(', '));
        });
    });
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Introduce el estado para listar los registros: ', (estado) => {
    listarRegistrosPorEstado(estado);
    rl.close();
});