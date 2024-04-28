import { logger } from '../utils'
import logic from '../logic'
import { useContext } from '../context'

function Register({ onUserRegistered, onLoginClick }) {
  const { showFeedback } = useContext()
  const handleSubmit = event => {
    event.preventDefault()

    const form = event.target

    const name = form.name.value
    const surname = form.surname.value
    const email = form.email.value
    const password = form.password.value

    try {
      logic.registerUser(name, surname, email, password)
        .then(() => {
          form.reset()

          onUserRegistered()
        })
        .catch(error => showFeedback(error, 'error'))
    } catch (error) {
      showFeedback(error)
    }
  }

  const handleLoginClick = event => {
    event.preventDefault()

    onLoginClick()
  }

  return (
    <div className="">
      <div className="">
        <form className='register-form' onSubmit={handleSubmit}>
          <h2 className="titles">Register</h2>

          <input type="text" className="" id="name" placeholder="Your name" />
          <input type="text" className="" id="surname" placeholder="Your surname" />

          <input type="email" className="" id="email" placeholder="Email" />

          <input type="password" className="" id="password" placeholder="Password" />

          <button type="submit" className="register-button">Register</button>

          <a style={{ color: 'orange' }} onClick={handleLoginClick}>Do you have an account? <strong>Click here</strong> to Log In</a>

        </form>
      </div>
    </div>
  );
}

export default Register