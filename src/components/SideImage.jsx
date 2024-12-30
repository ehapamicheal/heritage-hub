import React from 'react'
import './side-image.css';
import onBoardingMage from '../images/onboaring-img.png';

const SideImage = () => {
  return (
    <div className="login_left">
        <img src={onBoardingMage} alt="" />
    </div>
  )
}

export default SideImage;