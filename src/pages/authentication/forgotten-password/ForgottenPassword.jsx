import React from 'react';
import './forgotten-password.css';
import SideImage from '../../../components/SideImage';
import { Link } from 'react-router-dom';

const ForgottenPassword = () => {
  return (
    <div className="forgotten_container">
        <SideImage />

        <div className="forgotten_right">
            <div className="head">
                <h1>Forgotten Password</h1>
                <p>let’s help you set a new password</p>
            </div>

            <form action="">
                <div className="input_box">
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Email Address" required/>
                </div>

                <button type="submit" className="submit-btn">Submit</button>

                <div className="remember_box">
                    <p>Just remembered? <Link to="/login" className="link">Login</Link></p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default ForgottenPassword;