//40.- Una empresa guarda las ventas realizadas por sus tres representantes a lo largo de doce
//meses de sus cuatro productos, VENTAS( representante, mes, producto ). Queremos proyectar el
//total de ventas, TOTAL ( mes, producto ), para lo cual sumamos las ventas de cada producto de
//cada mes de todos los representantes. Imprimir toda la información.
function calcularTotalDeVentas(ventas) {
    const total = {};

    ventas.forEach((representante) => {
        const [rep, mes, producto, cantidad] = representante;
        if (!total[mes]) {
            total[mes] = {};
        }
        if (!total[mes][producto]) {
            total[mes][producto] = 0;
        }
        total[mes][producto] += cantidad;
    });

    return total;
}

const ventas = [
    ['rep1', 'enero', 'producto1', 100],
    ['rep2', 'enero', 'producto1', 150],
    ['rep3', 'enero', 'producto1', 200],
    ['rep1', 'febrero', 'producto1', 120],
    ['rep2', 'febrero', 'producto1', 180],
    ['rep3', 'febrero', 'producto1', 220],
    ['rep1', 'enero', 'producto2', 80],
    ['rep2', 'enero', 'producto2', 100],
    ['rep3', 'enero', 'producto2', 120],
    ['rep1', 'febrero', 'producto2', 90],
    ['rep2', 'febrero', 'producto2', 110],
    ['rep3', 'febrero', 'producto2', 130],
    ['rep1', 'enero', 'producto3', 200],
    ['rep2', 'enero', 'producto3', 100],
    ['rep3', 'enero', 'producto3', 150],
    ['rep1', 'febrero', 'producto3', 90],
    ['rep2', 'febrero', 'producto3', 110],
    ['rep3', 'febrero', 'producto3', 200],
    ['rep1', 'enero', 'producto4', 111],
    ['rep2', 'enero', 'producto4', 222],
    ['rep3', 'enero', 'producto4', 333],
    ['rep1', 'febrero', 'producto4', 100],
    ['rep2', 'febrero', 'producto4', 111],
    ['rep3', 'febrero', 'producto4', 122]
];

const totalVentas = calcularTotalDeVentas(ventas);
console.log("Total de Ventas:");
console.log(totalVentas);
