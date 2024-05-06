import { registerUser } from "../logic/registerUser";
import { useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const form = e.currentTarget

        const name = (form.elements.namedItem('name') as HTMLInputElement).value;
        const surname = (form.elements.namedItem('surname') as HTMLInputElement).value;
        const email = (form.elements.namedItem('email') as HTMLInputElement).value;
        const password = (form.elements.namedItem('password') as HTMLInputElement).value;

        registerUser(name, surname, email, password)
            .then(() => {
                form.reset()

                navigate('/login')
            })
    }

    return <main>
        <h1>Register</h1>

        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />

            <label htmlFor="surname">Surname</label>
            <input type="text" id="surname" />

            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" />

            <button type="submit">Register</button>
        </form>

        {/* <a href="" onClick={handleLoginClick}>Login</a> */}
    </main>
};

export default Register;