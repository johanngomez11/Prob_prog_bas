//35.- Generar una matriz de 4 filas y 5 columnas con números aleatorios entre 1 y 100, e
//imprimirla.
// Función para generar una matriz de dimensiones especificadas con números aleatorios entre 1 y 100
function generarMatriz(filas, columnas) {
    const matriz = [];
    for (let i = 0; i < filas; i++) {
        const fila = [];
        for (let j = 0; j < columnas; j++) {
            fila.push(Math.floor(Math.random() * 100) + 1);
        }
        matriz.push(fila);
    }
    return matriz;
}

// Generar matriz de 4 filas y 5 columnas
const matrizAleatoria = generarMatriz(4, 5);

// Imprimir la matriz
console.log("Matriz generada:");
matrizAleatoria.forEach(fila => console.log(fila.join('\t')));
