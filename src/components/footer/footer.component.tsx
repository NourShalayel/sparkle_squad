import { Link } from 'react-router-dom';
import './footer.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPhone, FaClock } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* First Section: Logo and Social Icons */}
        <div className="footer-section">
          <div className="logo">CareNest</div>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur. <br /> Consequat fermentum viverra auctor nibh <br /> eleifend sed lorem.
          </p>
          <div className="social-icons">
            <Link to=""><FaFacebookF /></Link>
            <Link to=""><FaTwitter /></Link>
            <Link to=""><FaLinkedinIn /></Link>
            <Link to=""><FaInstagram /></Link>
          </div>
        </div>

        {/* Second Section: Pages */}
        <div className="footer-section">
          <div className="logo">Pages</div>
          <ul>
            <li><Link to="">About Us</Link></li>
            <li><Link to="">Contact Info</Link></li>
            <li><Link to="">Track Location</Link></li>
            <li><Link to="">Career</Link></li>
          </ul>
        </div>

        {/* Third Section: Back Links */}
        <div className="footer-section">
          <div className="logo">Back Links</div>
          <ul>
            <li><Link to="">Brand</Link></li>
            <li><Link to="">Social Links</Link></li>
            <li><Link to="">Company Registration</Link></li>
            <li><Link to="">My Orders</Link></li>
          </ul>
        </div>

        {/* Fourth Section: Work Hours */}
        <div className="footer-section">
          <div className="logo">Work Hours</div>
          <div className="description icon-item">
            <FaClock className='info-icon' /> <span>24/7</span>
          </div>
          <div className="description icon-item">
            <FaPhone className='info-icon' /> <span>+94 76 00 00 000</span>
          </div>
          <div className="description icon-item">
            Our Support and Sales team is available <br /> 24/7 to answer your queries
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;