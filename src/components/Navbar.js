import titanLogo from "../images/titanlogo.png";

const Navbar = (props) => {
  return (
    <nav className="Navbar">
      <ul>
        <img src={titanLogo} alt="Titan Logo" className="Navbar-logo" />
        {props.items.map((item, index) => (
          <li key={index}>
            <a href={item.link}>{item.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
