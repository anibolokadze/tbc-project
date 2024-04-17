import Link from "next/link";

const Footer = () => {
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
        <ul className="flex justify-around">
          <li className="footer-link">
            <Link href="/terms">წესები და პირობები</Link>
          </li>
          <li className="footer-link">
            <Link href="/privacy">კონფიდენციალურობის პოლიტიკა</Link>
          </li>
          <li className="footer-link">
            <Link href="/blogs">Blogs</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
