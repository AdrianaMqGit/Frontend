console.log('Alcance de variables');

var variableGlobal ='variable de alcance global';
const varConstante = 'variable constante';
let varLetLocal = 'ABC';
let varLetNumero = 1112;

console.log('variable global 1,' + varLetNumero);

console.log('constante = ' + varConstante);

{
    variableGlobal = 'otro Valor';
    console.log('variable Global 2,' + variableGlobal)
    let varLetLocal = 'XYZ';
    console.log('letLocal: ' + varLetLocal);

}
console.log('letLocal: '+ varLetLocal);

let evaluacionIf = false;


if (true) {
    console.log('Adentro del IF');
    let letNumeroY = 11;
    let letNumeroX = 76;
    
    console.log('Operacion * = '+ (letNumeroX * letNumeroY));
}else{
    console.log('Estamos en el else de if');

}

console.log('+------------------Selector--------------------+');
let letKey = 2;

switch (letKey) {
    case 1:
        
        console.log('Caso #1 ');
        break;

    case 2:
        
        console.log('Caso #2');
        break;

    case 3: 

        console.log('Caso #3');
        break;

    default:
        console.log('Valor no determinado en el selector');
        break;
}
