// import React from 'react';
import './verification-email.css';
import SideImage from '../../../components/SideImage';
import { Link } from 'react-router-dom';
import React, { useRef } from "react";

const VerificationEmail = () => {
    const inputsRef = useRef([]);

    const handleInputChange = (e, index) => {
        const value = e.target.value;
    

        if (!/^\d$/.test(value) && value !== "") {
          e.target.value = ""; 
          return;
        }

        if (value && index < inputsRef.current.length - 1) {
          inputsRef.current[index + 1].focus();
        }
      };
    
      const handleKeyDown = (e, index) => {
        if (e.key === "Backspace") {
          if (e.target.value === "" && index > 0) {
            inputsRef.current[index - 1].focus();
          }
        }
      };

  return (
    <div className="verification_container">
        <SideImage />

        <div className="verification_right">
            <div className="head">
                <h1>Verify Account</h1>
                <p>please enter 6-digits code sent to your email</p>
            </div>

            <div className="form_wrapper">
                <form id="verifyForm">
                    <div className="verify_input_box">
                        {[...Array(6)].map((_, index) => (
                            <input
                                key={index}
                                ref={(el) => (inputsRef.current[index] = el)}
                                className="pin_inputs"
                                type="text"
                                maxLength={1}
                                onChange={(e) => handleInputChange(e, index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                            />
                        ))}
                    </div>

                    <p className="p1">Didn’t get the code? <Link className="resend_link">Resend</Link></p>

                    <button type="submit" className="submit-btn">Verify</button>

                </form>

            </div>
        </div>
    </div>
  )
}

export default VerificationEmail;