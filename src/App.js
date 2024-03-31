import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
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
  const [searchTerm, setSearchTerm] = useState("");
  const [products] = useState([...data.products]);

  return (
    <Router>
      <div className="App">
        <Header {...data.header} setSearch={setSearchTerm} />
        <main>
          <Routes>
            <Route
              path="/"
              element={<Home products={products} searchTerm={searchTerm} />}
            />
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
