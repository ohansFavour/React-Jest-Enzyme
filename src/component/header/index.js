import React from "react";
import "./styles.scss"; 
import Logo from "../../assets/logo.png";

export const Header = ()=>{
    return (
        <header>
        <div className="wrap">
            <div className="logo">
              <img src={Logo} alt="logo"/>
            </div>
        </div>
        </header>
    )
}

