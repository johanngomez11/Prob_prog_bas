//39.- Crear una tabla de 3 paginas, 4 filas y 5 columnas donde el primer elemento valga 1, el
//segundo 2, el tercero 3 y así sucesivamente.
function crearTablaDePaginas(paginas, filas, columnas) {
    let valor = 1;
    const tabla = [];

    for (let p = 0; p < paginas; p++) {
        const pagina = [];
        for (let i = 0; i < filas; i++) {
            const fila = [];
            for (let j = 0; j < columnas; j++) {
                fila.push(valor++);
            }
            pagina.push(fila);
        }
        tabla.push(pagina);
    }

    return tabla;
}

const paginas = 3;
const filas = 4;
const columnas = 5;
const tabla = crearTablaDePaginas(paginas, filas, columnas);
console.log("Tabla de 3 Páginas, 4 Filas y 5 Columnas:");
console.log(tabla);
