import React, { useState } from 'react';
import './sign-up.css';
import SideImage from '../../../components/SideImage';
import { Link } from 'react-router-dom';
import { IoEyeOutline } from "react-icons/io5";
import { PiEyeSlash } from "react-icons/pi";

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibiity = () => {
        setShowPassword(prevState => !prevState);
    }

    const [showPassword2, setShowPassword2] = useState(false);

    const togglePasswordVisibiity2 = () => {
        setShowPassword2(prevState => !prevState);
    }
  return (
    <div className="sign_up_container">
        <SideImage />

        <div className="sign_up_right">
            <div className="sign_up_main">
                <div className="head">
                    <h1>Welcome to <span>HeritageHub</span></h1>
                    <p>Hey there, Lets get you started</p>
                </div>

                <div className="sign_up_contents">
                    <form action="">
                        <div className="first_box">
                            <div className="input_box">
                                <label htmlFor="name">Name</label>
                                <input type="text" placeholder="First and Last Name" required/>

                            </div>

                            <div className="input_box">
                                <label htmlFor="Username">Username</label>
                                <input type="text" placeholder="Nick Name" required/>
                            </div>
                        </div>

                        <div className="second_box">
                            <div className="input_box2">
                                <label htmlFor="email">Email</label>
                                <input type="email" placeholder="example@gmail.com" required/>
                            </div>

                            <div className="input_box2">
                                <label htmlFor="Password">Password</label>
                                <input type={showPassword ? "text" : "password"} placeholder="8 character +" required/>

                                <div className="show_and_hide_box" onClick={togglePasswordVisibiity}>
                                    {showPassword ? (<PiEyeSlash className="hide_eye" />) : (<IoEyeOutline className="show_eye" />)}
                                </div>
                            </div>
                            
                            <div className="input_box2">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input type={showPassword2 ? "text" : "password"} placeholder="input password again" required/>

                                <div className="show_and_hide_box" onClick={togglePasswordVisibiity2}>
                                    {showPassword2 ? (<PiEyeSlash className="hide_eye" />) : (<IoEyeOutline className="show_eye" />)}
                                </div>
                            </div>
                        </div>

                        <button type="submit" className="submit-btn">Submit</button>

                        <div className="do_you_box">
                            <p>Don't have an account?  <Link rel="no" to="/login" className="signup_link" >login</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp;