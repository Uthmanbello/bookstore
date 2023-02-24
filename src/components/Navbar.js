import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="nav">
    <h1 className="head">Bookstore CMS</h1>
    <ul>
      <li>
        <NavLink to="/">BOOKS</NavLink>
      </li>
      <span />
      <li>
        <NavLink to="/categories">CATEGORIES</NavLink>
      </li>
      <span />
    </ul>
  </nav>
);

export default Navbar;
