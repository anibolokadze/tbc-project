import { Link } from "react-router-dom";
import "../styles/Components/Footer.css";

const Footer = ({ terms, privacy }) => {
  return (
    <footer>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="email">სიახლეებისთვის გამოგვიწერეთ</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="შეიყვანეთ მეილი..."
          autoComplete="off"
        />
        <button type="submit">გამოგვიწერეთ</button>
      </form>

      <nav>
        <ul>
          <li className="footer-link">
            <Link to="terms">{terms}</Link>
          </li>
          <li className="footer-link">
            <Link to="privacy">{privacy}</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
