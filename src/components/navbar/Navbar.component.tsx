import "./Navbar.css";
import myImage from "../../assets/careHeart.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { List, MagnifyingGlass, X } from "@phosphor-icons/react";

interface IProps {
  handleLogout: () => void;
}

const Navbar = (props: IProps) => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <section className="bg-[linear-gradient(to_right,#71b5fa_0%,#B6F8FF_49%,#82D3FF_100%)]">
      <div className="container">
        <div className="title">
          <img src={myImage} alt="heart care" className="img" />
          <div>CareNest</div>
        </div>
        <button
          className="lg:hidden"
          onClick={() => setOpenMenu(!openMenu)}
          aria-label="Toggle Menu"
        >
          {openMenu ? <X size={28} /> : <List size={28} />}
        </button>
        <div className={`nav ${openMenu ? "open" : ""}`}>
          <Link to="/" onClick={() => setOpenMenu(false)}>
            Home
          </Link>
          <Link to="/services" onClick={() => setOpenMenu(false)}>
            Service
          </Link>
          <Link to="/appointment" onClick={() => setOpenMenu(false)}>
            Appointment
          </Link>
          <Link to="/dashboard" onClick={() => setOpenMenu(false)}>
            Dashboard
          </Link>
        </div>
        <div className="desktop-actions flex gap-4">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search here"
              className="search-input"
            />
            <MagnifyingGlass size={25} className="search-icon" />
          </div>
          <button className="logout-input" onClick={props.handleLogout}>
            LOGOUT
          </button>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
