import { logger } from '../utils'

import logic from '../logic'

import { useContext } from '../context'

function Login({ onUserLoggedIn, onRegisterClick }) {

  const { showFeedback } = useContext()
  const handleSubmit = event => {
    event.preventDefault()

    const form = event.target

    const email = form.email.value
    const password = form.password.value

    try {
      logic.loginUser(email, password)
        .then(() => {
          form.reset()

          onUserLoggedIn()
        })
        .catch(error => showFeedback(error, 'error'))
    } catch (error) {
      showFeedback(error)
    }
  }

  const handleRegisterClick = event => {
    event.preventDefault()

    onRegisterClick()
  }

  return <div>
    <div>
      <form className='login-form' onSubmit={handleSubmit}>
        <h2 id='titles'>Login</h2>
        <input type="email" id="email" placeholder="Email" />

        <input type="password" id="password" placeholder="Password" />

        <button type="submit">Log In</button>

        <a style={{ color: 'orange' }} onClick={handleRegisterClick}>You don't have an account? <strong>Click here</  strong> to Register</a>

      </form>
    </div>
  </div >
}

export default Login