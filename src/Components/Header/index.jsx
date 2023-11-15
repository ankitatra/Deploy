
import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import "./index.css"
import {BiSolidPhoneCall,BiMessageDetail} from 'react-icons/bi';
import {CgProfile} from 'react-icons/cg';
import {RxHamburgerMenu} from 'react-icons/rx'
export const Header=()=>{
    const [showNavbar, setShowNavbar] = useState(false);
  
    const handleShowNavbar = () => {
      setShowNavbar(!showNavbar);
    };
    return(
        <>
        <nav className="headercontainer">
            <div className="container">
            <div className="logoconatiner">
                <div className="logo">
                    <img src="https://cdn.anytimeastro.com/dashaspeaks/web/content/anytimeastro/images/anytime-astro-logo-icon.svg" alt=""/>
                </div>
                <div className="companyname"> 
                    <h2>Anytime Astro</h2>
                    <p>Consult Online Astrologers Anytime</p>
                </div>
            </div>
            

            <div className={`info  ${showNavbar && "active"}`}>
            <div className="button">
                <button> <BiSolidPhoneCall /> Talk To Astrologer</button>
                <button> <BiMessageDetail />Chat with Astrologers</button>
            </div>

            <div className="select">
                <select name="" id="">
                    <option>ENG</option>
                    <option>hindi</option>
                </select>
            </div>
           <div className="profile">
           <CgProfile style={{fontSize:"30px"}}/>
           </div>
           <div className="signin"> 
            <p>sign in</p></div>
           <div className="hamburger">
            <RxHamburgerMenu style={{fontSize:"30px"}}/>
           </div >
           </div>
            </div>
            
        </nav>

        <div>
            
        </div>
        
            
        </>
    )
}


  

  
 
  