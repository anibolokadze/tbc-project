import { Link } from "react-router-dom";
import "../styles/Components/Header.css";

const Header = ({ about, contact, logo, profile, setSearch }) => {
  const debounce = (callback, wait) => {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => callback.apply(this, args), wait);
    };
  };

  const handleSearchInputChange = (event) => {
    const value = event.target.value;
    setSearch(value);
  };

  const debouncedSearch = debounce(handleSearchInputChange, 300);

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
          <li>
            <Link to="/profile">
              <img src={profile} alt={profile} className="profile" />
            </Link>
          </li>
        </ul>
      </nav>

      <form className="search">
        <input
          type="search"
          id="search"
          name="search"
          placeholder="ძებნა..."
          autoComplete="off"
          onChange={debouncedSearch}
        />
      </form>
    </header>
  );
};

export default Header;
