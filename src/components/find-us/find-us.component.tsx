import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import locationImg from '../../assets/image.png'
import './find-us.css'
const FindUs = () => {
  return (
    <div className="find-us">
      <h2 className="find-us-title">Find Us Here</h2>
      <div className="contact-info">
        <div className="info-box">
          <FaPhone className="find-us-icon" />
          <span>031 000 0 000</span>
        </div>
        <div className="info-box">
          <FaEnvelope className="find-us-icon" />
          <span>carenest@gmail.com</span>
        </div>
        <div className="info-box">
          <FaMapMarkerAlt className="find-us-icon" />
          <span>07, Colombo Sri Lanka</span>
        </div>
      </div>
      
        <img src={locationImg} alt="" className="contact-image"/>
      
    </div>
  );
};

export default FindUs;
