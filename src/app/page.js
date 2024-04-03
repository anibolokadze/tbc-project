"use client";
import { useEffect, useState } from "react";
import Product from "@/components/Product";
import data from "@/data";
import Layout from "@/components/layout";

const Page = () => {
  const [products] = useState([...data.products]);
  const [searchTerm, setSearchTerm] = useState("");
  const [inputValue, setInputValue] = useState(searchTerm);
  const [sortedProducts, setSortedProducts] = useState([...products]);
  const [isAscendingOrder, setIsAscendingOrder] = useState(true);
  const [sorted, setSorted] = useState(false);

  useEffect(() => {
    const debounce = setTimeout(() => {
      setSearchTerm(inputValue);
    }, 500);

    return () => clearTimeout(debounce);
  }, [inputValue]);

  const handleSearchInputChange = (event) => {
    setInputValue(event.target.value);
  };

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
    <Layout {...data}>
      <form className="flex justify-center">
        <input
          className="px-3 py-2"
          type="search"
          id="search"
          name="search"
          placeholder="ძებნა..."
          autoComplete="off"
          value={inputValue}
          onChange={handleSearchInputChange}
        />
      </form>

      <button type="button" onClick={sortProducts} className="mx-10 my-10">
        {isAscendingOrder ? "ზრდადობით დალაგება" : "კლებადობით დალაგება"}
      </button>

      {sorted && (
        <button type="button" onClick={clearSorting}>
          გასუფთავება
        </button>
      )}

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
    </Layout>
  );
};

export default Page;
