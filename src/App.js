import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import data from "./data";
import { Header, Footer } from "./Components/index";
import {
  About,
  Home,
  Contact,
  Terms,
  Privacy,
  Profile,
  Blog,
} from "./pages/index";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header {...data.header} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/blogs" element={<Blog />} />
          </Routes>
        </main>
        <Footer {...data.footer} />
      </div>
    </Router>
  );
};

export default App;
