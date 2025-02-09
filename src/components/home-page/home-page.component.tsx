import docImage from '../../assets/doctorImg.png';
import './home-page.css'
const HomePage = () => {
    return(
        <div className="container">
            <div className="content">
                <div className="text">
                    <h2 className="header">Providing the best <br /> online medical <br /> consultant.</h2>
                    <p className="paragraph">We are committed to providing you with the best medical and <br />
                    healthcare services to help you live healthier and happier.</p>
                </div>
                <div className="img-container">
                    <img src={docImage} alt="" className="doctor-img" />
                </div>
            </div>
        </div>
        
    )
}

export default HomePage;