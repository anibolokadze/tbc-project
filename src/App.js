import "./App.css";
import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";
import data from "./data";

function App() {
  return (
    <div className="App">
      <Header {...data.header} />
      {data.content.map((content, index) => (
        <Content
          key={index}
          title={content.title}
          description={content.description}
          imageUrl={content.imageUrl}
          imageAlt={content.imageAlt}
        />
      ))}
      <Footer {...data.footer} />
    </div>
  );
}

export default App;
