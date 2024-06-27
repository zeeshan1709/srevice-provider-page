import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="custom-footer-top">
        <div className="custom-footer-row">
          <div className="custom-footer-section custom-about">
            <h4>About Real Estate</h4>
            <p>
              Real Estate is a full stack service provider for all real estate needs...
              <a href="#">Read more</a>
            </p>
          </div>
       
          <div className="custom-footer-section custom-properties">
            <h4>Properties in India</h4>
            <p>
              <a href="#">Property in Mumbai</a> | <a href="#">Property in Pune</a> | <a href="#">Property in Delhi</a> | 
              <a href="#">Property in New Mumbai</a> | <a href="#">Property in Chennai</a> | <a href="#">Property in Bengaluru</a> | 
              <a href="#">Property in Thane</a> | <a href="#">Property in Nagar</a> | <a href="#">Property in Kalyan</a>
            </p>
          
          </div>
        </div>
        <div className="custom-footer-row">
          <div className="custom-footer-section custom-network">
            <h4>More from our Network</h4>
            <p>
              <a href="#">MensXp</a> | <a href="#">iDiva</a> | <a href="#">Gadgets Now</a> | 
              <a href="#">Economic Times</a> | <a href="#">Filmfare</a> | <a href="#">The Times of India</a> | 
              <a href="#">USA Today</a> | <a href="#">New York Post</a> | <a href="#">Chicago Tribune</a>
            </p>
          </div>
          <div className="custom-footer-section custom-projects">
            <h4>New Projects in India</h4>
            <p>
              <a href="#">Property in Mumbai</a> | <a href="#">Property in Pune</a> | <a href="#">Property in Delhi</a> | 
              <a href="#">Property in New Mumbai</a> | <a href="#">Property in Chennai</a> | <a href="#">Property in Bengaluru</a> | 
              <a href="#">Property in Thane</a> | <a href="#">Property in Nagar</a> | <a href="#">Property in Kalyan</a>
            </p>
          </div>
        </div>
      </div>
      <div className="custom-footer-bottom">
        <div className="custom-footer-social">
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
          <a href="#"><i className="fab fa-apple"></i></a>
          <a href="#"><i className="fab fa-google-play"></i></a>
        </div>
        <div className="custom-footer-links">
          <a href="#">Advertise with us</a>
          <a href="#">Contact us</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Careers</a>
          <a href="#">Help Center</a>
        </div>
      </div>
      <p className="custom-footer-copyright">
        All trademarks, logos and names are properties of their respective owners. All Rights Reserved. © Copyright 2024 Real Estate Realty Services Limited.
      </p>
    </footer>
  );
};

export default Footer;
