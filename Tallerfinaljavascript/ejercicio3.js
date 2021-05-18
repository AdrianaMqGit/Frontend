const readline = require('readline');

let captura = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

captura.question(`Ingrese un numero: `, function(data){
    var numeroArreglo = [] = data.split("");
    var numinvArreglo = [];
    var contador = 1;
    var contador2 = parseInt(numeroArreglo.length) - 1;

    do {        
        contador = contador - 1;
        numinvArreglo[contador] = numeroArreglo[contador2];
        contador2 = contador2 - 1,
        contador = contador + 2;
    } while (contador <= numeroArreglo.length);
    
    contador = numeroArreglo.toString();
    contador2 = numinvArreglo.toString();

    if (contador == contador2) {

        console.log(`Es Capicúa`)

    } else {
        console.log(`No es Capicúa`)
    }
    captura.close();
});