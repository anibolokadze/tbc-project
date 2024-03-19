import "./App.css";
import Header from "./Components/Header/Header";
import Content from "./Components/Product/Product";
import Footer from "./Components/Footer/Footer";
import Search from "./Components/Search/Search";
import data from "./data";

function App() {
  return (
    <div className="App">
      <Header {...data.header} />
      <Search />
      <main>
        {data.content.map((content, index) => (
          <Content
            key={index}
            title={content.title}
            description={content.description}
            imageUrl={content.imageUrl}
            imageAlt={content.imageAlt}
          />
        ))}
      </main>
      <Footer {...data.footer} />
    </div>
  );
}

export default App;
