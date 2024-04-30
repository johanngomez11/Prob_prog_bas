//30.- Introducir dos números por teclado y mediante un menú, calcule su suma, su resta, su
//multiplicación o su división.
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Introduce el primer número: ', (numero1) => {
    rl.question('Introduce el segundo número: ', (numero2) => {
        console.log("1. Suma");
        console.log("2. Resta");
        console.log("3. Multiplicación");
        console.log("4. División");

        rl.question('Selecciona una opción del menú: ', (opcion) => {
            const num1 = parseFloat(numero1);
            const num2 = parseFloat(numero2);
            switch (parseInt(opcion)) {
                case 1:
                    console.log("La suma es: " + (num1 + num2));
                    break;
                case 2:
                    console.log("La resta es: " + (num1 - num2));
                    break;
                case 3:
                    console.log("La multiplicación es: " + (num1 * num2));
                    break;
                case 4:
                    console.log("La división es: " + (num1 / num2));
                    break;
                default:
                    console.log("Opción inválida.");
            }
            rl.close();
        });
    });
});
