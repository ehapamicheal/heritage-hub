import React, { useState } from 'react';
import './login.css';
import { IoEyeOutline } from "react-icons/io5";
import { PiEyeSlash } from "react-icons/pi";
import { Link } from 'react-router-dom';
import SideImage from '../../../components/SideImage';

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibiity = () => {
        setShowPassword(prevState => !prevState);
    }

  return (
    <div className="login_container">

        <SideImage />

        <div className="login_right">
            <div className="right_head">
                <h1>Welcome Back</h1>
                <p>Hello! welcome back to HeritageHub</p>
            </div>

            <div className="right_content">
                <form action="">
                    <div className="input_wrapper">
                        <div className="input_box">
                            <p>Email</p>
                            <input type="email" placeholder='example@gmail.com' required/>
                        </div>

                        <div className="input_box">
                            <p>Password</p>
                            <input type={showPassword ? "text" : "password"} placeholder='8+ Characters' required/>

                            <div className="show_and_hide_box" onClick={togglePasswordVisibiity}>
                                {showPassword ? (<PiEyeSlash className="hide_eye" />) : (<IoEyeOutline className="show_eye" />)}
                            </div>
                        </div>

                        <Link to="/forgotten-password" className="forget_link">Forgot Password?</Link>
                    </div>

                    <button className="submit_btn">Submit</button>

                    <div className="do_you_box">
                        <p>Don't have an account? <Link to="/sign-up" className="signup_link">Signup</Link></p>
                    </div>
                </form>
            </div>
        </div>

    </div>
  )
}

export default Login;