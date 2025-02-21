import React from "react";

import './Header.css'

const Header=()=>{
    return (

        <header className="header">
      <div className="logo">
        <img src="/Images/logo.png" alt="Logo" />
      </div>
      <button className="contact-btn">Contact Us</button>
    </header>

    );
};

export default Header;