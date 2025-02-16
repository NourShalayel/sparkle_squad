import './Navbar.css'
import myImage from '../../assets/careHeart.png';
import { Link } from 'react-router-dom';

interface IProps {
    handleLogout: () => void;
}

const Navbar = (props: IProps) => {
    return (
        <section className="bg-[linear-gradient(to_right,#71b5fa_0%,#B6F8FF_49%,#82D3FF_100%)] pt-8">
            <div className='container wrapper'>
                <div className='title'>
                    <img src={myImage} alt="heart care" className='img'/>
                    <div>CareNest</div>
                </div>
                <div className="nav">
                    <div><Link to="/">Home</Link></div>
                    <div><Link to="/services">Service</Link></div>
                    <div><Link to="/appointment">Appointment</Link></div>
                    <div><Link to="/dashboard">Dashboard</Link></div>
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
        </section>
    )
}

export default Navbar;