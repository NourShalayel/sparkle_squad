import './about.css';
import doctorImage from '../../../../assets/doc-pat.png';
import femaleImage from '../../../../assets/female-doc.png';

const About = () => {
    return (
        <div className="about-container">
            <div className="flex flex-col justify-center items-center lg:flex-row gap-12 relative mx-auto">
                <div className="about-image">
                    <img src={doctorImage} alt="Doctor and patient" className="about-doc-image h-[300px] lg:h-full" />
                    <div className="female-wrapper">
                        <img src={femaleImage} alt="Female doctor" className="female-image" />
                    </div>
                </div>
                <div className="about-text text-center lg:text-start w-full lg:w-1/2">
                    <div className="about-title">About Us</div>
                    <div className="sub-title">CareNest</div>
                    <p className="content-head">Welcome to CareNest, a dedicated healthcare provider</p>
                    <p className="content-paragraph">
                        At CareNest, we believe in delivering more than just medical services; we’re here to create a supportive, healing environment where patients and families feel valued and understood.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;