import NavbarStyle from "./Navbar.style";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div>
        <i>{"<Clarusway/>"}</i>
        <span>Recipe</span>
      </div>

      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/register">Register</Link>
        <Link to="/logout">Logout</Link>
      </div>
    </nav>
  );
};

export default Navbar;
