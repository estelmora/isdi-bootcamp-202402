import { logger } from '../utils'
import { useContext } from 'react'; // Correct import for useContext from 'react'
import logic from '../logic'

function Login({ onUserLoggedIn, onRegisterClick }) {
    const { showFeedback } = useContext(AppContext); // Use your context object

    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;

        logger.debug('Login -> handleSubmit', email, password);

        try {
            logic.loginUser(email, password)
                .then(() => {
                    form.reset();

                    onUserLoggedIn();
                })
                .catch(error => showFeedback(error.message, 'error')); // Make sure to use error.message
        } catch (error) {
            showFeedback(error.message); // Make sure to use error.message
        }
    };

    const handleRegisterClick = event => {
        event.preventDefault();

        onRegisterClick();
    };

    logger.debug('Login -> render');

    return (
        <main>
            <h1>Login</h1>

            <form onSubmit={handleSubmit}>
                <div className=''>
                    <label htmlFor="email" >Email</label>
                    <input id="email" name="email" type="email" required /> {/* Added name and type attributes */}
                </div>

                <div className=''>
                    <label htmlFor="password">Password</label>
                    <input id="password" name="password" type="password" required /> {/* Added name attribute */}
                </div>

                <div className=''>
                    <button className="round-button" type="submit">Login</button>
                </div>
            </form>

            <a href="#" onClick={handleRegisterClick}>Register</a> {/* Prevent default link behavior */}
        </main>
    );
}

export default Login;
