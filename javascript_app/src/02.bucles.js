console.log('+------------Bucle--------------+');

let limiteBucle = 10;
let contador = 0;

do{
    contador ++;

    console.log('Contador: '+contador);

} while (contador < limiteBucle);

console.log('+ Bucle: Do While');
let letcondicion = true;

while(letcondicion){

    let letrandom = Math.random() * 10;

    console.log('Numero Randomico: '+letrandom);
    if (letrandom < 5){
        letcondicion = false;
        console.log('Salida del Bucle: '+letcondicion);
    }

}

console.log('+ Bucle: For');

let limitefor = 20;

console.log('Limite = '+limitefor);

for (let index = 0; index < limitefor; index++) {

    let randomFor = Number.parseInt((Math.random() * 10),10);

    console.log('Indice for: '+index);

    console.log('Random  : '+randomFor);
    
}

