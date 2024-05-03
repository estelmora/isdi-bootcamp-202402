import React from "react";
import Navbar from "../components/Navbar";

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