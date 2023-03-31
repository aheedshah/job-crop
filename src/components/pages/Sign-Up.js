import React from 'react';
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {

    const navigate = useNavigate()

//creating a formData state to hold each state for email and password
    const [formData] = useState({
        email: "",
        password: "",
    });

//Destructuring email and password from formData
    const {email, password } = formData;

//Declaring the onSubmit function
    async function onSubmit(e) {
        e.preventDefault();
        try {
            const auth = getAuth();
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            navigate("/");


        } catch (error) {
            console.log(error);
        }
    }

    return (
        <main>
            <section>
                <div className='login-content'>
                    <form className='login-form'>
                        <div className="header-form">Sign Up for your account</div>
                        <div>
                            First Name
                            <input
                                id="email-address"
                                name="email"
                                type="text"
                                required
                                className="input-form-login"
                                placeholder="First Name"
                            />
                            Last Name
                            <input
                                id="email-address"
                                name="email"
                                type="text"
                                required
                                className="input-form-login"
                                placeholder="Last Name"
                            />
                            <label htmlFor="email-address">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                required
                                className="input-form-login"
                                placeholder="Email address"
                            />
                        </div>
                        <div>
                            <label htmlFor="password">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                className="input-form-login"
                                placeholder="Password"
                            />
                        </div>
                        <div>
                            <button
                                className="form-button"
                                onClick={onSubmit}
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    )
}

export default SignUp