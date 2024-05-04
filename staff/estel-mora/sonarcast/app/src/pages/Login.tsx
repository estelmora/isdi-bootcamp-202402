import Navbar from "../components/Navbar";

function Login() {
    return (
        <div>
            <Navbar />
            <div>
                <h1> Log In</h1>
                <form className="login-form" onSubmit={handleSubmit}>
                    <input type="email" id="email" placeholder="email@.com" />
                    <input type="password" id="password" placeholder="password" />

                    <button type="submit" className="login-button">Log In</button>
                    <a style={{ color: 'orange' }} onClick={handleRegisterClick}>You don't have an account? <strong>Click here</  strong> to Register</a>
                </form>
            </div>
        </div>

    )
}

export default Login
