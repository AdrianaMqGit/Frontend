const readline = require('readline');

let Teclado = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var numeroArreglo = [];

Teclado.question(`Numero: `, function(numero){
    numeroArreglo = numero.split("");
    var suma = 0;
    var contador = 0;

    while (contador < numeroArreglo.length) {
        suma = suma + parseInt(numeroArreglo[contador]);
        contador++;
    }

    console.log(`Suma: ${suma}`);
    
    Teclado.close();
});