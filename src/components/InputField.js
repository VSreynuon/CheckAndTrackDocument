import React, { useState } from 'react'

export default function InputField({ type, placeholder, label }) {
    // State to toggle password visible
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    return (
        <div className="input-wrapper">
            <label htmlFor={label}>{label}<span> *</span></label>
            <input type={type} placeholder={placeholder} className="input-field" required />
            {type === "password" && (
                <i
                    onClick={() => setIsPasswordShown(prevState => !prevState)}
                    className="material-symbols-rounded eye-icon"
                >
                    {/* {isPasswordShown ? "visibility" : "visibility_off"} */}
                </i>
            )}
        </div>
    )
}
