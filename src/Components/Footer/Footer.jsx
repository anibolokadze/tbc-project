function Footer({ footerText, link1, link1Text, link2, link2Text }) {
  return (
    <footer>
      <p>{footerText}</p>
      <form>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your email address"
        />
        <button type="submit">გამოგვიწერეთ</button>
      </form>

      <a href={link1} className="footer-link">
        {link1Text}
      </a>
      <a href={link2} className="footer-link">
        {link2Text}
      </a>
    </footer>
  );
}

export default Footer;
