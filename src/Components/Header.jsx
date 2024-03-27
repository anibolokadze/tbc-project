import { Link } from "react-router-dom";
import search from "../assets/svg/search.svg";
import "../styles/Components/Header.css";

const Header = ({ about, contact, logo }) => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <img src={logo} alt={logo} />
            </Link>
          </li>
          <div className="links">
            <li>
              <Link to="/about">{about}</Link>
            </li>
            <li>
              <Link to="/contact">{contact}</Link>
            </li>
          </div>
        </ul>
      </nav>

      <form
        className="search"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="search">ყველაფერი, რასაც ეძებ</label>
        <input
          type="search"
          id="search"
          name="search"
          placeholder="ძებნა..."
          autoComplete="off"
        />

        <button type="submit">
          <img src={search} alt={search} />
        </button>
      </form>
    </header>
  );
};

export default Header;
