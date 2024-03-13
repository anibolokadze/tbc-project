function Header({ link1Text, link2Text }) {
  return (
    <header>
      <nav>
        <ul>
          <li>{link1Text}</li>
          <li>{link2Text}</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
