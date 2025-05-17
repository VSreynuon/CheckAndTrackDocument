import React from 'react'
import google from "../assets/google.jpg";
import x from "../assets/x.jpg"

export default function SocialLogin() {
    return (
        <div className="social-login">
            <button className="social-button">
                <img src={google} alt="Google" className="social-icon" />
                Google
            </button>
            <button className="social-button">
                <img src={x} alt="Apple" className="social-icon" />
                Apple
            </button>
        </div>
    )
}
