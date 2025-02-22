import React from 'react';
import './Footer.css';
import logo from '/Images/logo.png';
import playstore_icon from '/Images/play.png';
import applestore_icon from '/Images/apple.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className='footer-container'>
      
      {/* Left Section */}
      <div className='footer-brand'>
        <img src={logo} alt="FoundersClub Logo" className="footer-logo"/>
        <p className='p1'>Foundersclub</p>
        <p>Follow us on</p>
        <div className='footer-social-icons'>
          <a href="https://x.com/" className='footer-social-link'>
            <FontAwesomeIcon icon={faXTwitter} /> Twitter
          </a>
          <a href="https://linkedin.com/" className='footer-social-link'>
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className='footer-download'>
        <h3>Download from</h3>
        <a href="https://play.google.com/store/apps">
          <img src={playstore_icon} alt="Google Play Store" className="store-icon" />
        </a>
        <a href="https://www.apple.com/app-store/">
          <img src={applestore_icon} alt="Apple App Store" className="store-icon" />
        </a>
      </div>

    </div>
  );
}

export default Footer;
