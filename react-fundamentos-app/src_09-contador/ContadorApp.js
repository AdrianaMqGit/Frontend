import React, { useState } from 'react'

console.log('Componente Contador o Acumulador');

const ContadorApp = ({valor_contador}) => {
    console.log('.:ContadorApp:.');

    const [contador, setContador] = useState(valor_contador);

    const contarClick = () => {
        setContador(contador + 1);
        console.log('Contador = ', contador);
    }

    return (
        <>
            <h1>Contador Components React</h1>
            <h5>Acumulador de Clicks</h5>
            <hr></hr>
            <h1>Contador = {contador}</h1>
            <hr></hr>
            <button onClick={contarClick}>Contar +1</button>
           
        </>    
    );
}

export default ContadorApp;