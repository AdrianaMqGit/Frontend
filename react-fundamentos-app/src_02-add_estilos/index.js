import React from 'react';
import ReactDOM from 'react-dom';

//hoja de estilos
import './index.css'

const saludo = <h1>Hola desde app fundamentos react</h1>;

const divRoot = document.querySelector('#root');

ReactDOM.render(saludo, divRoot);