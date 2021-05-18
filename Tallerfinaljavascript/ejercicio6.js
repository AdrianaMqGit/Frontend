const { match } = require('assert');
const readline = require('readline');

let teclado = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
teclado.question(` numero: `, function(data){
    var j=true;

    for (var i = 2; i <= data/2; i++) {

        if ((data % i) == 0) {
            j = false;
        }
    }
    if(j){
        console.log(`Numero primo`);         

    }else{console.log(`Numero no primo`);}    

    teclado.close();
});