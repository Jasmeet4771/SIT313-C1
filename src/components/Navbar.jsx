
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="navbar-logo">
        DEV@Deakin
      </Link>

      <input
        className="navbar-search"
        type="search"
        placeholder="Search..."
        aria-label="Search"
      />

      <nav className="navbar-actions">
        <Link to="/post" className="navbar-post">
          Post
        </Link>
        <Link to="/login" className="navbar-login">
          Login
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
