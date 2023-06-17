import React, { useState } from "react";
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';

function Menu(){
    return(
        <>
            <p><a style={{textDecoration: 'none', color: "inherit"}} href="#home">Home</a></p>
            <p><a style={{textDecoration: 'none', color: "inherit"}} href="#agents">Agents</a></p>
            <p><a style={{textDecoration: 'none', color: "inherit"}} href="#guns">Guns</a></p>
            <p><a style={{textDecoration: 'none', color: "inherit"}} href="#news">News</a></p>
            <p><a style={{textDecoration: 'none', color: "inherit"}} href="#contact">Contact</a></p>
        </>
    );
}

function Navbar(){
    const [toggleMenu, setToggleMenu] = useState(false);

    return(
        <div className="navbar">
            <div className="navbar-links">
                <div className="navbar-links-logo">
                    <img src={logo} alt="Logo"/>
                </div>
                <div className="navbar-links-container">
                    <Menu />
                </div>
            </div>
            <div className="navbar-menu">
                {toggleMenu ?
                    <RiCloseLine color="#fff" size={30} onClick={()=>{setToggleMenu(false)}}/>:
                    <RiMenu3Line color="#fff" size={30} onClick={()=>{setToggleMenu(true)}}/>
                }
                {toggleMenu ?
                    <div className="navbar-menu-container">
                        <div className="navbar-menu-container-links"> 
                            <Menu />
                        </div>
                    </div>:
                    null
                }
            </div>
        </div>
    );
}

export default Navbar;