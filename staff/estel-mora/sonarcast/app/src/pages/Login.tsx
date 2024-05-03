import React from "react";
import Navbar from "../components/Navbar";

export default function Login() {
    return (
        <div>
            <Navbar />
            <div>
                <h1> Log In</h1>
                <form className="login-form">
                    <input type="email" id="email" placeholder="email@.com" />
                    <input type="password" id="password" placeholder="password" />

                    <button type="submit" className="login-button">Log In</button>

                </form>
            </div>
        </div>

    )
} 