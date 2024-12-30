import React, { useState } from 'react';
import './reset-password.css';
import SideImage from '../../../components/SideImage';
import { IoEyeOutline } from "react-icons/io5";
import { PiEyeSlash } from "react-icons/pi";
import { RiErrorWarningFill } from "react-icons/ri";

const ResetPassword = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const togglePasswordVisibiity = () => {
        setShowPassword((prev) => !prev);
    }

    const togglePasswordVisibiity2 = () => {
        setShowPassword2((prev) => !prev);
    }


    const passwordMatch = password === confirmPassword || confirmPassword === "";
  return (
    <div className="reset_password_container">
        <SideImage />

        <div className="reset_password_right">
            <div className="head">
                <h1>Reset Password</h1>
                <p>You can now set your preferred password</p>
            </div>

            <div className="form_wrapper">
                <form action="" id="resetPasswordForm">
                    <div className="input_wrapper_box">
                        <div className="input_box">
                            <label htmlFor="Password">Password</label>
                            <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="New password" required/>

                            <div className="show_and_hide_box" onClick={togglePasswordVisibiity}>
                                {showPassword ? (<PiEyeSlash className="hide_eye" />) : (<IoEyeOutline className="show_eye" />)}
                            </div>
                        </div>

                        <div className="input_box">
                            <label htmlFor="Password">Confirm Password</label>
                            <input type={showPassword2 ? "text" : "password"} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Re-enter password" required/>

                            <div className="show_and_hide_box" onClick={togglePasswordVisibiity2}>
                                {showPassword2 ? (<PiEyeSlash className="hide_eye" />) : (<IoEyeOutline className="show_eye" />)}
                            </div>
                        </div>
                    </div>

                    {!passwordMatch && (
                        <div className="error_box">
                            <RiErrorWarningFill className="icon" />
                            <p>Password doesn't match</p>
                        </div>
                    )}

                    <button type="submit" className="submit-btn">Reset Password</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ResetPassword;