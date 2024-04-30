//41. Hacer un programa que nos permita dar altas en el archivo DATOS.DAT, cuyos campos son:
//ID, NOMBRE, APELLIDOS, DIRECCIÓN y ESTADO.
const fs = require('fs');

function altaRegistro(id, nombre, apellidos, direccion, estado) {
    fs.appendFile('DATOS.DAT', `${id},${nombre},${apellidos},${direccion},${estado}\n`, (err) => {
        if (err) {
            console.error('Error al dar de alta el registro:', err);
            return;
        }
        console.log('Registro añadido correctamente.');
    });
}

altaRegistro(1, 'Sofía', 'Sandoval', 'Calle 123', 'Activo');
