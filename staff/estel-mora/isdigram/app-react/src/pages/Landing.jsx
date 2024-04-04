// Landing importa el modulo Component desde la biblioteca de React.
// Classe landing que extiende de Component

import { logger } from '../utils'

function Landing(props) {
    const handleLoginClick = event => {
        event.preventDefault()

        props.onLoginClick()
    }

    const handleRegisterClick = event => {
        event.preventDefault()

        props.onRegisterClick()
    }

    logger.debug('Landing -> render')

    return <main>
        <h1>Landing</h1>

        <a href="" onClick={handleLoginClick}>Login</a> or <a href="" onClick={handleRegisterClick}>Register</a>
    </main>
}

export default Landing


// event: es una acción de ejecución
//this. hace referencia al objeto Landing 
//props. accede a los métodos = this.props (acceden a propiedades + métodos Landing-Components)
//a = anchor para insertar un enlace en un doc
//href= para poner el enlace en el elemento

//  logger.debug('Landing'): Logs a debug message indicating the Landing component is initialized super() // llama métodos de Component

//super() // llama métodos de Component

//constructor(){}instancia propiedades de Components