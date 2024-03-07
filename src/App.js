import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Header & Navigation */}
      <header>
        <nav>
          <ul>
            <li>ჩვენს შესახებ</li>
            <li>კონტაქტი</li>
          </ul>
        </nav>
      </header>

      {/* Content */}
      <main>
        <div>
          <h1>Welcome!</h1>
          <p>This is a super simple landing page.</p>
        </div>
        <div>
          <img src="https://via.placeholder.com/400" alt="placeholder" />
        </div>
      </main>

      {/* Footer */}
      <footer>
        <p>გამოიწერეთ ჩვენი სიახლეები</p>
        <form>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email address"
          />
          <button type="submit">გამოგვიწერეთ</button>
        </form>

        <a href="#" className="footer-link">
          წესები და პირობები
        </a>
        <a href="#" className="footer-link">
          კონფიდენციალურობის პოლიტიკა
        </a>
      </footer>
    </div>
  );
}

export default App;
