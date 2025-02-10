import './about.css'
import doctorImage from '../../assets/doc-pat.png';
import femaleImage from '../../assets/female-doc.png';

const About = () => {
    return(
        <div className="about-container">
            <div className="about-image">
                <img src={doctorImage} alt="" className='about-doc-image'/>
                <div className="female-wrapper">
                    <img src={femaleImage} alt="Female doctor" className="female-image" />
                </div>
            </div>
            <div className="about-text">
                <div className="about-title">About Us</div>
                <div className="sub-title">CareNest</div>
                <p className="content-head">Welcome to CareNest, a dedicated <br />healthcare provider</p>
                <p className="content-paragraph">At CareNest, we believe in delivering more than just <br /> medical services; we’re here to create a supportive, <br /> healing environment where patients and families feel <br /> valued and understood. </p>
            </div>
        </div>
    )
}

export default About;