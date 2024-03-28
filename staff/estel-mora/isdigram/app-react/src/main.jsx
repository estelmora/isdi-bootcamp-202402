import React from "react"
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
    //<React.StrictMode>
    <App />
    // </React.StrictMode>,
)



//RENDER es un metodo nativo de react,  "pintar/mostrar en pantalla", y dentro de render se pone lo que se quiere pintar


// react.StrictMode: para detectar problemas en la APP, realiza advertencias y comprueba. 
// en este caso, aplica en lo que envuelve "APP"