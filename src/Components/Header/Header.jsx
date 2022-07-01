import Navbar from "../Navbar/Navbar";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <Navbar />
      <p>The Rick and Morty App</p>
    </div>
  );
};

export default Header;
