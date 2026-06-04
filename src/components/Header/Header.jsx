import "./Header.css";
import logo from "./graphics.png";


const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
    </header>
  );
};


export default Header;