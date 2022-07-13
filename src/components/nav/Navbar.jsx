import Nav, { Logo } from "./Navbar.style";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Nav justify="space-between" wrap="wrap">
      <Logo to="/">
        <i>{"<Clarusway/>"}</i>
        <span>Recipe</span>
      </Logo>

      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/register">Register</Link>
        <Link to="/logout">Logout</Link>
      </div>
    </Nav>
  );
};

export default Navbar;
