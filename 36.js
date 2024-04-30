//36.- Generar una matriz de 4 filas y 5 columnas con números aleatorios entre 1 y 100, y hacer su
//matriz transpuesta.
// Función para generar una matriz de dimensiones especificadas con números aleatorios entre min y max
function generarMatriz(filas, columnas, min, max) {
    const matriz = [];
    for (let i = 0; i < filas; i++) {
        const fila = [];
        for (let j = 0; j < columnas; j++) {
            fila.push(Math.floor(Math.random() * (max - min + 1)) + min);
        }
        matriz.push(fila);
    }
    return matriz;
}

// Función para calcular la matriz transpuesta de una matriz dada
function matrizTranspuesta(matriz) {
    const filas = matriz.length;
    const columnas = matriz[0].length;
    const transpuesta = [];

    for (let j = 0; j < columnas; j++) {
        const filaTranspuesta = [];
        for (let i = 0; i < filas; i++) {
            filaTranspuesta.push(matriz[i][j]);
        }
        transpuesta.push(filaTranspuesta);
    }

    return transpuesta;
}

// Generar matriz aleatoria de 4 filas y 5 columnas con números entre 1 y 100
const matrizOriginal = generarMatriz(4, 5, 1, 100);

// Imprimir matriz original
console.log("Matriz Original:");
console.log(matrizOriginal);

// Calcular y mostrar la matriz transpuesta
const matrizTraspuesta = matrizTranspuesta(matrizOriginal);
console.log("\nMatriz Transpuesta:");
console.log(matrizTraspuesta);
