import "./Footer.css";

function Footer({ terms, privacy }) {
  return (
    <footer>
      <form>
        <label htmlFor="email">სიახლეებისთვის გამოგვიწერეთ</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="შეიყვანეთ მეილი..."
          aria-label="email"
        />
        <button type="submit">გამოგვიწერეთ</button>
      </form>

      <a href="#" className="footer-link">
        {terms}
      </a>
      <a href="#" className="footer-link">
        {privacy}
      </a>
    </footer>
  );
}

export default Footer;
