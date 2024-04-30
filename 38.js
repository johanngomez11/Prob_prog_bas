//38.-Ordenar una matriz de M filas y N columnas por la primera columna utilizando el método
//SHELL (por inserción).
function ordenarMatrizPorPrimeraColumna(matriz) {
    const filas = matriz.length;
    const columnas = matriz[0].length;

    // Aplicar el método SHELL para ordenar por la primera columna
    for (let brecha = Math.floor(filas / 2); brecha > 0; brecha = Math.floor(brecha / 2)) {
        for (let i = brecha; i < filas; i += 1) {
            const temp = matriz[i];
            let j;
            for (j = i; j >= brecha && matriz[j - brecha][0] > temp[0]; j -= brecha) {
                matriz[j] = matriz[j - brecha];
            }
            matriz[j] = temp;
        }
    }

    return matriz;
}

// Ejemplo de uso:
const matriz = [
    [5, 9, 3],
    [2, 7, 1],
    [8, 4, 6],
    [1, 6, 2]
];

console.log("Matriz Original:");
console.log(matriz);
const matrizOrdenada = ordenarMatrizPorPrimeraColumna(matriz);
console.log("Matriz Ordenada por la Primera Columna:");
console.log(matrizOrdenada);
