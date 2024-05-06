import { loginUser } from "../logic/loginUser";
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const form = e.currentTarget

        const username = form.email.value
        const password = form.password.value

        loginUser(username, password)
            .then(() => {
                form.reset()

                navigate('/')
            })
    }

    return (
        <div>
            <div>
                <h1> Log In</h1>
                <form className="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input id="email" />

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" />

                    <button type="submit">Login</button>
                </form>
                <a style={{ color: 'orange' }} >Don't have an account? <strong>Click here</  strong> to Register</a>
            </div>
        </div>

    )
}

export default Login
