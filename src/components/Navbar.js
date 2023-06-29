import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

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
    <div className="navUser mob-none"><FaUser /></div>
  </nav>
);

export default Navbar;
