import data from "../data";
import Product from "../Components/Product";

const Home = () => {
  return (
    <section className="layout">
      {data.products.map((product) => (
        <Product
          key={product.id}
          title={product.title}
          description={product.description}
          image={product.image}
          imageAlt={product.imageAlt}
        />
      ))}
    </section>
  );
};

export default Home;
