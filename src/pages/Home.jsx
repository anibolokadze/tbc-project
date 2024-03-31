import { useState } from "react";
import Product from "../Components/Product";

const Home = ({ products, searchTerm }) => {
  const [sortedProducts, setSortedProducts] = useState([...products]);
  const [isAscendingOrder, setIsAscendingOrder] = useState(true);
  const [sorted, setSorted] = useState(false);

  const sortProducts = () => {
    const sorted = [...sortedProducts];
    sorted.sort((a, b) =>
      isAscendingOrder ? a.price - b.price : b.price - a.price
    );
    setSortedProducts(sorted);
    setIsAscendingOrder(!isAscendingOrder);
    setSorted(true);
  };

  const clearSorting = () => {
    setSortedProducts([...products]);
    setIsAscendingOrder(true);
    setSorted(false);
  };

  return (
    <>
      <button type="button" onClick={sortProducts}>
        {isAscendingOrder ? "ზრდადობით დალაგება" : "კლებადობით დალაგება"}
      </button>

      {sorted && (
        <button type="button" onClick={clearSorting}>
          Clear Sorting
        </button>
      )}

      <section className="layout">
        {sortedProducts
          .filter((product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((product) => (
            <Product
              key={product.id}
              title={product.title}
              description={product.description}
              image={product.image}
              imageAlt={product.imageAlt}
              price={product.price}
            />
          ))}
      </section>
    </>
  );
};

export default Home;
