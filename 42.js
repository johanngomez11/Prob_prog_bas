//42.- Hacer un programa que nos permita dar bajas en el fichero DATOS.DAT.
const fs = require('fs');

function bajaRegistro(id) {
    fs.readFile('DATOS.DAT', 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo DATOS.DAT:', err);
            return;
        }
        const lineas = data.split('\n');
        const nuevosDatos = lineas.filter(linea => {
            const campos = linea.split(',');
            return campos[0] !== id.toString();
        }).join('\n');
        fs.writeFile('DATOS.DAT', nuevosDatos, 'utf8', (err) => {
            if (err) {
                console.error('Error al dar de baja el registro:', err);
                return;
            }
            console.log('Registro eliminado correctamente.');
        });
    });
}

bajaRegistro(1);