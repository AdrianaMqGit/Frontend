import React from 'react';
import ReactDOM from 'react-dom';

//hoja de estilos
import './index.css'

//Componentes Creados
import ComponenteEventoApp from './ComponenteEventoApp';

const divRoot = document.querySelector('#root');

ReactDOM.render(<ComponenteEventoApp/> , divRoot);