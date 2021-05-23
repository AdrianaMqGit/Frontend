import React from 'react';
import ReactDOM from 'react-dom';

//hoja de estilos
import './index.css'

//Componentes Creados
import ContadorApp from './ContadorApp';

const divRoot = document.querySelector('#root');

ReactDOM.render(<ContadorApp valor_contador = {0} /> , divRoot);