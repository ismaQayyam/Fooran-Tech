import React from "react";
import "../../Style/Home/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-box contact-box">
          <div className="footer-icon">
            <i className="fas fa-envelope"></i>
          </div>
          <h4>Contact</h4>
          <p>+92 331 9097707</p>
          <p>+92 322 8479709</p>
          <a href="#contact" className="footer-link">Contact Us</a>
        </div>

        <div className="footer-box location-box">
          <div className="footer-icon">
            <i className="fas fa-headset"></i>
          </div>
          <h4>Locations</h4>
 <p>
  Arfa Software Technology<br />
  Park, Ferozepur Road<br />
  Level #7 Room-8
</p>
<a
  href="https://www.google.com/maps/place/Arfa+Software+Technology+Park,+Ferozepur+Road,+Lahore"
  className="footer-link"
  target="_blank"
  rel="noopener noreferrer"
>
  View Location
</a>
        </div>
        <div className="footer-box sales-box">
          <div className="footer-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <h4>Sales</h4>
          <p><a href="mailto:help@fooran.com">help@fooran.com</a></p>
          <p><a href="mailto:ahmad@fooran.com">ahmad@fooran.com</a></p>
          <a href="#sales" className="footer-link">Keep In Touch</a>
        </div>

        <div className="footer-box support-box">
          <div className="footer-icon">
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <h4>Support</h4>
          <p>We are here to help with any<br />questions or code issues</p>
          <a href="#support" className="footer-link">Help & Support</a>
        </div>
      </div>

      <div className="footer-main">
        <div className="footer-column about">
          <div className="footer-logo">
            <img src="/Image/footer logo.png" alt="Logo" />
          </div>
          <p style={{fontSize:"15px", color: "white"}}>
            We specialize in bringing visionary ideas to life through innovative
            solutions and cutting-edge execution. By leveraging advanced
            analytical expertise, we empower technical teams and deliver
            exceptional value to our clients, turning challenges into
            opportunities for growth and success.
          </p>
        </div>

        <div className="footer-column services">
          <h4>SERVICES</h4>
          <ul>
           <ul>
  <li><Link to="/services/mbl" className="footer-link">Mobile App Development</Link></li>
  <li><Link to="/services/web" className="footer-link">Web Development</Link></li>

  <li><Link to="/services/emb" className="footer-link">Embedded Systems</Link></li>
  <li><Link to="/services/ui" className="footer-link">UI/UX Design</Link></li>
  <li><Link to="/services/ecd" className="footer-link">ECAD</Link></li>
    <li><Link to="/services/iot" className="footer-link">IoT</Link></li>
</ul>

          </ul>
        </div>

        <div className="footer-column links">
          <h4>USEFUL LINKS</h4>
          <ul>
          <ul>
  <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
  <li><Link to="/about-us" className="footer-link">About Us</Link></li>
  <li><Link to="/career" className="footer-link">Careers</Link></li>
</ul>

          </ul>
        </div>

        <div className="footer-column contact">
          <h4 style={{color:"white"}}>CONTACT</h4>
          <p><a href="mailto:help@fooran.com" style={{color:"white"}}>help@fooran.com</a></p>
          < p style={{color:"white"}}>+92 331 9097707</p>
          <p style={{color:"white"}}>+92 322 8479709</p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-facebook"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p style={{fontSize:"15px", color: "white"}}>© {new Date().getFullYear()} Fooen Tech. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;