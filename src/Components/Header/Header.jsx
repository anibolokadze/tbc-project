import search from "../../assets/svg/search.svg";
import "./Header.css";

function Header({ about, contact, logo }) {
  return (
    <header>
      <nav>
        <ul>
          <div className="logo">
            <li>
              <img src={logo} alt={logo} />
            </li>
          </div>
          <div className="links">
            <li>
              <a href="#">{about}</a>
            </li>
            <li>
              <a href="#">{contact}</a>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
