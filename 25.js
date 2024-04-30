//25.- Introducir un número menor de 5000 y pasarlo a numero romano.
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para convertir un número a número romano
function convertirARomano(numero) {
    const valoresRomanos = [
        {valor: 1000, simbolo: "M"},
        {valor: 900, simbolo: "CM"},
        {valor: 500, simbolo: "D"},
        {valor: 400, simbolo: "CD"},
        {valor: 100, simbolo: "C"},
        {valor: 90, simbolo: "XC"},
        {valor: 50, simbolo: "L"},
        {valor: 40, simbolo: "XL"},
        {valor: 10, simbolo: "X"},
        {valor: 9, simbolo: "IX"},
        {valor: 5, simbolo: "V"},
        {valor: 4, simbolo: "IV"},
        {valor: 1, simbolo: "I"}
    ];

    let resultado = "";
    for (let i = 0; i < valoresRomanos.length; i++) {
        while (numero >= valoresRomanos[i].valor) {
            resultado += valoresRomanos[i].simbolo;
            numero -= valoresRomanos[i].valor;
        }
    }
    return resultado;
}

// Solicitar al usuario que introduzca el número menor de 5000
rl.question('Introduce un número entero positivo menor de 5000: ', (numero) => {
    if (parseInt(numero) >= 5000) {
        console.log("El número debe ser menor de 5000.");
    } else {
        console.log("El número " + numero + " en número romano es: " + convertirARomano(parseInt(numero)));
    }
    rl.close();
});
