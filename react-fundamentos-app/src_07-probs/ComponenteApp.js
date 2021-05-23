import React from 'react'

const persona = {
    nombre: 'Beatriz Adriana',
    apellidos: 'Muñoz Quintana',
    email: 'Beatriz.munozq@campusucc.edu.co'
}
const ComponenteApp = (props) => {
    console.log('Componente Parametros probs');
    console.log('parametro 1: ', props.parm01);
    console.log('parametro 2: ', props.parm02);
    console.log('parametro 3: ', props.parm03);

    return (
        <>
            <h1>Saludo desde un Functional Components React</h1>
            <h5>Multiparametros props.</h5>
            <hr></hr>
            <p>Parametro 01 {props.parm01}</p>
            <p>Parametro 02 {props.parm02}</p>
            <p>Parametro 03 {props.parm03}</p>
            <hr></hr>
            <p>Objeto Persona: {persona.nombre} {persona.apellidos}</p>
            <p>Email: {persona.email}</p>
            <p>{JSON.stringify(persona, null, null)}</p>

        </>

    );
    
}

ComponenteApp.defaultProps = {
    parm03: 'SIN VALORES'
}

export default ComponenteApp;