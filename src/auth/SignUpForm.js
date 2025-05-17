import React, { useState } from 'react'
import InputField from '../components/InputField'
import SocialLogin from '../components/SocialLogin'
import "../../styles/signup.css";

import { useNavigate } from 'react-router-dom';

export default function SignUpForm() {
    const [isSignUp, setIsSignUp] = useState(false);
    const [firstname, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navidate = useNavigate();

    const handleSingup = (e) =>{
        e.preventDefault();

        if (email === "test@example.com" && password === "123456") {
            alert("Login Successful! Redirecting to Dashboard..."); 
            navidate("/dashboard"); // Redirects after successful login
        } else {
            alert("Invalid credentials! Please try again."); 
        }
        console.log(" User sign up: ",firstname, lastName,email,password);
        navidate("/dashboard");
    }
    return (
        <div className="">
            {isSignUp ? (
                <div className="login-container">
                    <h2 className="form-title">Sign UP</h2>
                    <SocialLogin />
                    <p className="sep"><span>or</span></p>

                    <form onChange={handleSingup} className="login-form">
                        <InputField type="firstname" placeholder="first Name" label="First Name" require  onChange={(e) => setFirstName(e.target.value)} />
                        <InputField type="lastname" placeholder="enter your last name" label="Last Name"  onChange={(e) => setLastName(e.target.value)}/>
                        <InputField type="email" placeholder=" enter email address" label="Email" onChange={(e) => setEmail(e.target.value)}/>
                        <InputField type="password" placeholder="enter your password" label="Password" onChange={(e) => setPassword(e.target.value)}/>
                        <a href="#" className="forgot-pass-link">Forgot Password?</a>

                        <button onClick={() => navidate("/dashboard")} className="login-button">Sign Up</button>
                    </form>
                    <p className="signup-text">Already have an account? <span onClick={() => setIsSignUp(false)}>Sign in now</span></p>
                </div>
            ) : (
                <div className="login-container">
                    <h2 className="form-title">Sign in</h2>
                    <SocialLogin />
                    <p className="sep"><span>or</span></p>

                    <form action="#" className="login-form">
                        <InputField type="email" placeholder="Email address" label="Email" />
                        <InputField type="password" placeholder="password" label="Password" />
                        <a href="#" className="forgot-pass-link">Forgot Password?</a>

                        <button onClick={() => navidate("/dashboard")} className="login-button">Sign in</button>
                    </form>
                    <p className="signup-text">Don&apos;t have an account? <span onClick={() => setIsSignUp(true)}>Sign up now</span></p>
                </div>
            )}
        </div>
    )
}
