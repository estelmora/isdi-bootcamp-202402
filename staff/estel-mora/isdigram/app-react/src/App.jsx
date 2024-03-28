import { logger } from './utils'
import logic from './logic'

import React, { Component } from 'react';
import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'

class App extends Component {
    constructor() {
        super() //  es para tener acceso a this en el constructor

        let initialView;
        // Determine the initial view based on whether the user is logged in
        if (logic.isUserLoggedIn()) {
            initialView = 'home';
        } else {
            initialView = 'landing';
        }

        this.state = { view: initialView };
        // Initialize state with the determined view
    }

    render() {
        // función que muestra lo siguiente:
        if (this.state.view === 'landing')

            return <Landing onLoginClick={() => this.setState({ view: 'login' })} onRegisterClick={() => this.setState({ view: 'register' })} />

        // pasamos funciones que al ser llamadas cambian la vista a 'login' o 'register

        else if (this.state.view === 'login')

            return <Login onRegisterClick={() => this.setState({ view: 'register' })} onUserLoggedIn={() => this.setState({ view: 'home' })} />
        else if (this.state.view === 'register')
            // pasamos que en función click +  userLoggedIn que al ser llamadas muestran la vista a 'home'

            return <Register onLoginClick={() => this.setState({ view: 'login' })} onUserRegistered={() => this.setState({ view: 'login' })} />

        // Pasamos función onLoginClick para cambiar a la vista 'login' + onUserRegistered llevan también a 'login'.

        else if (this.state.view === 'home')
            // Si la vista es 'home', simplemente renderizamos el componente Home sin pasarle props adicionales.

            return <Home />
        else
            // En caso de que el estado de 'view' no sea ninguno de los esperados, mostramos ❌
            return <h1>❌❌</h1>
    }
}
export default App

// if (this.state.view === 'landing') : si la vista es 'landing', renderizamos el componente Landing.

// else if (this.state.view === 'login'): si la vista es 'login' renderizamos el componente 'login

//return <Register onLoginClick={() => this.setState({ view: si la vista es 'register' renderiza el componente 'register'

//else if (this.state.view === 'home') si la vista es 'home' renderizamos el componente 'Home '