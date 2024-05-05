import Navbar from "../components/Navbar";
//import { Logger } from "../utils";



// import logic from '../logic'

// import { useContext } from '../context' ??

// function Register({ onUserRegistered, onLoginClick }) {
//     const { showFeedback } = useContext()

//     const handleSubmit = event => {
//         event.preventDefault()

//         const form = event.target

//         const name = form.name.value
//         const birthdate = form.birthdate.value
//         const email = form.email.value
//         const username = form.username.value
//         const password = form.password.value

//         try {
//             logic.registerUser(name, birthdate, email, username, password)
//                 .then(() => {
//                     form.reset()

//                     onUserRegistered()
//                 })
//                 .catch(error => showFeedback(error, 'error'))
//         } catch (error) {
//             showFeedback(error)
//         }
//     }

//     const handleLoginClick = event => {
//         event.preventDefault()

//         onLoginClick()
//     }

//     logger.debug('Register -> render')

//     return <main>
//         <h1>Register</h1>

//         <form onSubmit={handleSubmit}>
//             <label htmlFor="name">Name</label>
//             <input type="text" id="name" />

//             <label htmlFor="birthdate">Age</label>
//             <input type="date" id="birthdate" />

//             <label htmlFor="email">E-mail</label>
//             <input type="email" id="email" />

//             <label htmlFor="username">Username</label>
//             <input id="username" />

//             <label htmlFor="password">Password</label>
//             <input type="password" id="password" />

//             <button className="round-button" type="submit">Register</button>
//         </form>

//         <a href="" onClick={handleLoginClick}>Login</a>
//     </main>
// }


function Register() {
    return (
        <div>
            <Navbar />
            <div>
                <form className="register-form" >
                    <h2>Register</h2>

                    <input type="text" className="" id="name" placeholder=" name" />
                    <input type="text" className="" id="surname" placeholder=" surname" />
                    <input type="email" className="" id="email" placeholder="email@.com" />
                    <input type="password" className="" id="password" placeholder="password" />

                    <button type="submit" className="register-button">Register</button>

                </form>
            </div >
        </div>
    )
};

export default Register;