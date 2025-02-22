import React from "react";

import './Benefit.css'

const Benefit=()=>{
    return (

        <div className='container'>
        <div className='benefit-container'>
            <h1>Benefits</h1>
            <div className="benefit">
               <div className='benefit-leftbox'>
                 <p className='benefit-title'><img src='/Images/dice.png' alt="" />NETWORK</p>
                 <p className='benefit-description'>Dive into thriving communities tailored to your interests. Share ideas, seek advice, and spark innovation by connecting with like-minded individuals.</p>
               </div>
               <div className='benefit-rightbox'>
                 <img src="/Images/ben1.png" alt=""/>
               </div>
            </div>

            <div className="benefit">
               <div className='benefit-leftbox'>
                 <p className='benefit-title'><img src='/Images/compass.png' alt="" />GLOBAL</p>
                 <p className='benefit-description'>Dive into thriving communities tailored to your interests. Share ideas, seek advice, and spark innovation by connecting with like-minded individuals.</p>
               </div>
               <div className='benefit-rightbox'>
               <img src="/Images/ben2.png" alt=""/>
               </div>
            </div>

            <div className="benefit">
               <div className='benefit-leftbox'>
                 <p className='benefit-title'><img src='/Images/com.png' alt="" />COLLABORATE</p>
                 <p className='benefit-description'>Dive into thriving communities tailored to your interests. Share ideas, seek advice, and spark innovation by connecting with like-minded individuals.</p>
               </div>
               <div className='benefit-rightbox'>
               <img src="/Images/ben3.png" alt=""/>
               </div>
            </div>

            <div className="benefit">
               <div className='benefit-leftbox'>
                 <p className='benefit-title'><img src='/Images/sm.png' alt="" />MATCH SKILL</p>
                 <p className='benefit-description'>Dive into thriving communities tailored to your interests. Share ideas, seek advice, and spark innovation by connecting with like-minded individuals.</p>
               </div>
               <div className='benefit-rightbox'>
               <img src="/Images/ben4.png" alt=""/>
               </div>
            </div>

        </div>
    </div>

    );
};

export default Benefit;