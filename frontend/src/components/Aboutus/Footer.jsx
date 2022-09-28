import React from 'react';
import './footer.css';

const Footer = () => (
  <div className="footer section__padding">
    <div className="footer-heading">
      <h1 className="gradient__text">Music, Once Admitted to the Soul, Becomes a Sort of Spirit, And Never Dies</h1>
    </div>

    <div className="footer-links">
      <div className="footer-links_logo">
        <h1 className='gradient__text'>Beat Bot </h1>
        <p>The All Kisama and Group Company <br /> All Rights Reserved</p>
      </div>
      <div className="footer-links_div">
        <h4>Links</h4>
        <p>LinkedIn</p>
        <p>Social Media</p>
        <p>Facebook</p>
        <p>Instagram</p>
      </div>
      <div className="footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="footer-links_div">
        <h4>Get in touch</h4>
        <p>The All New Kisama And Group Company</p>
        <p>03154754912</p>
        <p>beatbot@gmail.com</p>
      </div>
    </div>

    <div className="footer-copyright">
      <p>@2022 Beat_Bot. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;