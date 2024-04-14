"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Product from "../components/Product";
import Link from "next/link";
import data from "../data";
import Layout from "../components/layout";

const Page = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [inputValue, setInputValue] = useState(searchTerm);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [isAscendingOrder, setIsAscendingOrder] = useState(true);
  const [sorted, setSorted] = useState(false);
  const [productError, setProductError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setProducts(response.data.products);
        setSortedProducts(response.data.products);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setProductError("Error occurred while fetching Products.");
      }
    };

    fetchProducts();
  }, []);

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
    setSortedProducts(products);
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

      {loading ? (
        <p>loading ... </p>
      ) : (
        <>
          {products && !productError ? (
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {sortedProducts
                .filter((product) =>
                  product.title.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((product) => (
                  <Link href={`products/${product.id}`} key={product.id}>
                    <Product
                      key={product.id}
                      id={product.id}
                      title={product.title}
                      description={product.description}
                      image={product.images[0]}
                      imageAlt={product.description}
                      price={product.price}
                    />
                  </Link>
                ))}
            </section>
          ) : (
            <div>{productError}</div>
          )}
        </>
      )}
    </Layout>
  );
};

export default Page;
