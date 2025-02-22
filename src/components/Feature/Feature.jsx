import React from "react";
import "./Feature.css"; // Import styles

const Feature = ({ title, description, img }) => {
  return (
    <div className="feature-container">
      <div className="feature-content">
        {/* Left Section - Text */}
        <div className="feature-text">
          <h1>{title}</h1>
          <p className="feature-description">{description}</p>

          {/* Feature Points */}
          <div className="feature-point">
            <img src="/Images/log.png" alt="Icon" />
            <p>Welcome to FoundersClub</p>
          </div>
          <div className="feature-point">
            <img src="/Images/log.png" alt="Icon" />
            <p>Welcome to FoundersClub</p>
          </div>
          <div className="feature-point">
            <img src="/Images/log.png" alt="Icon" />
            <p>Welcome to FoundersClub</p>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="feature-image">
          <img src={img} alt="Feature" />
        </div>
      </div>
    </div>
  );
};

export default Feature;
















