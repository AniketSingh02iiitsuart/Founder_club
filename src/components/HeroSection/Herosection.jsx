import React from "react";

import './herosection.css'

const herosection=()=>{
    return (
        <section className="hero">
        <div className="hero-text">
           
           <div className="first-box">
            <img src="/Images/log.png" alt="Logo" />
           <p className="welcome">WELCOME TO FOUNDERSCLUB</p>
           </div>

          <div className="second-box">
          <h1>Where Startups <br></br> Meet Talent</h1>
          <button className="download-btn">Download Now</button>
          </div>
          
          <div className="underline"></div>
          <p className="description-p1">
            Foundersclub is your gateway to connect, innovate, and thrive. 
            Join a global community of startups and professionals driving the 
            future of business and technology.
          </p>
        </div>


        
        <div className="hero-image">
          <img src="/Images/heroimg.png" alt="Team working" />
        </div>
      </section>

    );
};

export default herosection;