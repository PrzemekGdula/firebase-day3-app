import React from 'react'import { lstat } from 'fs';
import ReactDOM from 'react-dom';
import App from './App'

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)