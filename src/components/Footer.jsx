import React from 'react';
import './footer.css';
import { footerLogo } from '../data';
import NigeriaImage from '../images/Nigeria-lmg.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer_container">
        <div className="footer_main">
            <div className="footer_left">
               <img src={NigeriaImage} alt="Nigeria image" />
            </div>

            <div className="footer_right">

                <div className="social_box">
                    {footerLogo.map(footer => (
                        <Link className="social_links" key={footer.id} to={footer.link}  target="_blank"  rel="noopener noreferrer">
                            {footer.icon}
                        </Link>
                    ))}
                </div>
            </div>
        </div>

        <div className="text_box">
            <p>HeritageHUB</p>
            <Link>Terms</Link>
            <Link>Privacy</Link>
            <Link>Cookies</Link>
        </div>
    </div>
  )
}

export default Footer;