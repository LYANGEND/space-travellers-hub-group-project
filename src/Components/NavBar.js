import '../styles/navbar.css';
import logo from '../logo.png';

const NavBar = () => (
  <nav className="navbar">
    <img id="logo" src={logo} alt="Logo" />
    <h1>Space hub</h1>
  </nav>
);

export default NavBar;
