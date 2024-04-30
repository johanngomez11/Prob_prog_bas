//43.- Dado el archivo DATOS.DAT, realizar un programa que nos permita realizar modificaciones
//cuantas veces deseemos.
const fs = require('fs');

function modificarRegistro(id, nuevoNombre, nuevosApellidos, nuevaDireccion, nuevoEstado) {
    fs.readFile('DATOS.DAT', 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo DATOS.DAT:', err);
            return;
        }
        const lineas = data.split('\n');
        for (let i = 0; i < lineas.length; i++) {
            const campos = lineas[i].split(',');
            if (campos[0] === id.toString()) {
                campos[1] = nuevoNombre;
                campos[2] = nuevosApellidos;
                campos[3] = nuevaDireccion;
                campos[4] = nuevoEstado;
                lineas[i] = campos.join(',');
                break;
            }
        }
        const nuevosDatos = lineas.join('\n');
        fs.writeFile('DATOS.DAT', nuevosDatos, 'utf8', (err) => {
            if (err) {
                console.error('Error al modificar el registro:', err);
                return;
            }
            console.log('Registro modificado correctamente.');
        });
    });
}

modificarRegistro(1, 'Chabelo', 'Gómez', 'Avenida 11', 'Inactivo');