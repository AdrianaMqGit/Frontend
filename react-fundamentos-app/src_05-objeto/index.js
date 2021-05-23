import React from 'react';
import ReactDOM from 'react-dom';

//hoja de estilos
import './index.css'

//Componentes Creados
import ComponenteApp from './ComponenteApp'

const divRoot = document.querySelector('#root');

ReactDOM.render(<ComponenteApp /> , divRoot);