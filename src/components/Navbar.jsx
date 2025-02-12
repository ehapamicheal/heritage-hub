import React, { useState } from "react";
import './navbar.css';
import { Link, NavLink } from 'react-router-dom';
import HeritageLogo from '../images/heritage-logo.png';
import { links } from '../data';
import { LuSearch } from "react-icons/lu";
import openIcon from '../svgs/open-icon.svg';
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    const [isNavShowing, setIsNavShowing] = useState(false);
  
    const toggleMenu = () => {
      setIsNavShowing(!isNavShowing);
    };
  
  return (
    <header className="navbar_container">
        <div className="navbar_main">
           <div className="logo_flex">
                <button type='button' className="nav-toggle-btn" onClick={toggleMenu}>
                    <img src={openIcon} className={`open ${isNavShowing ? 'hidden' : ''}`} alt="" />
                    <AiOutlineClose className={`close ${isNavShowing ? 'hidden' : ''}`} />
                </button>

                <Link to="/" className="logo_box">
                    <img src={HeritageLogo} alt="heritage logo" />
                </Link>

                <ul className={`nav-links ${isNavShowing ? 'show-nav' : 'hide-nav'}`}>
                    {links.map((link) => (
                        <li key={link.name}>
                            <NavLink
                                to={link.path}
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
           </div>

            <div className="navbar_right">
                <div className="search_box">
                    <input type="text" placeholder="Search"/>
                    <div className="icon_box">
                        < LuSearch className="search_icon" />
                    </div>
                </div>

               <Link to="/login" className="login_link">Login</Link>

               <Link to="/sign-up" className="get_started">Get Started</Link>
            </div>
        </div>
    </header>
  )
}

export default Navbar;