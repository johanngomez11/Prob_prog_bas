//28.- Simular el lanzamiento de una moneda al aire e imprimir cara o cruz.
function lanzarMoneda() {
    return Math.random() < 0.5 ? 'cara' : 'cruz';
}

console.log("El resultado del lanzamiento de la moneda es: " + lanzarMoneda());
