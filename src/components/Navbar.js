import titanLogo from "../images/titanlogo.png";
import { FaSearch } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";

const Navbar = (props) => {
  return (
    <nav className="Navbar">
      <img src={titanLogo} alt="Titan Logo" className="Navbar-logo" />
      <ul>
        {props.items.map((item, index) => (
          <li key={index}>
            <a href={item.link}>{item.text}</a>
          </li>
        ))}
      </ul>
      <div className="iconHolder">
        <FaSearch className="nav-icon" />
        <BsCart4 className="nav-icon" />
        <VscAccount className="nav-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
