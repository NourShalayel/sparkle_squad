import './header.css'
import myImage from '../../assets/careHeart.png';
import { Link } from 'react-router-dom';

interface IProps {
    handleLogout: () => void;
}

const Header = (props: IProps) => {
    return (
        <>
            <div className='contanier'>
                <div className='title'>
                    <img src={myImage} alt="heart care" className='img'/>
                    <div>CareNest</div>
                </div>
                <div className="nav">
                    <div><Link to="/">Home</Link></div>
                    <div><Link to="">Service</Link></div>
                    <div><Link to="/appointment">Appointment</Link></div>
                </div>
                <div className="left-side">
                    <div className="search-container">
                        <input type="text" placeholder='Search here' className='search-input' />
                        <img src="https://cdn-icons-png.flaticon.com/512/622/622669.png" alt="Search" className="search-icon"></img>
                    </div>
                    <div className="logout-container">
                        <button className='logout-input' onClick={() => {props.handleLogout()}}>LOGOUT</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;