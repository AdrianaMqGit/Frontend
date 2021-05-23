import React from 'react'

const persona = {
    nombre: 'Beatriz Adriana',
    apellidos: 'Muñoz Quintana',
    email: 'Beatriz.munozq@campusucc.edu.co'
}
const ComponenteApp = ({parm01, parm02, parm03 = 'SIN VALOR'}) => {
    console.log('Componente Varios Parametros');
    console.log('parametro 1: ', parm01);
    console.log('parametro 2: ', parm02);
    console.log('parametro 3: ', parm03);

    return (
        <>
            <h1>Saludo desde un Functional Components React</h1>
            <h5>Multiparametros</h5>
            <hr></hr>
            <p>Parametro 01 {parm01}</p>
            <p>Parametro 02 {parm02}</p>
            <p>Parametro 03 {parm03}</p>
            <hr></hr>
            <p>Objeto Persona: {persona.nombre} {persona.apellidos}</p>
            <p>Email: {persona.email}</p>
            <p>{JSON.stringify(persona, null, null)}</p>

        </>

    );
    
}

export default ComponenteApp;