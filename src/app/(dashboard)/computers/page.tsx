"use client";
import { useState, useEffect } from "react";
import Layout from "../../../components/layout";
import { getProducts } from "../../../../api";
import { Product } from "../../../types";
import Products from "../../../components/Products";
import Search from "../../../components/Search";

import SkeletonLoading from "../../../components/SkeletonLoading";
import style from "../../../components/SkeletonLoading/SkeletonLoading.module.scss";

const Computers = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [, setSortOrder] = useState("price-ascending");

  useEffect(() => {
    setLoading(true);
    getProducts("computers")
      .then((fetchedProducts) => {
        setProducts(fetchedProducts);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setError("Failed to fetch products");
        setLoading(false);
      });
  }, []);

  const sortProducts = (
    order:
      | "price-ascending"
      | "price-descending"
      | "alphabet-ascending"
      | "alphabet-descending"
  ) => {
    const sortedProducts = [...products];
    if (order === "price-ascending") {
      sortedProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else if (order === "price-descending") {
      sortedProducts.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    } else if (order === "alphabet-ascending") {
      sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
    } else if (order === "alphabet-descending") {
      sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
    }
    setProducts(sortedProducts);
    setSortOrder(order);
  };

  return (
    <Layout>
      <Search
        setSearchQuery={setSearchQuery}
        sortProducts={sortProducts}
        currentSortOrder={"price-ascending"}
        showSortButton={true}
      />

      <section>
        {loading && (
          <div className={style.height}>
            <SkeletonLoading />
            <SkeletonLoading />
          </div>
        )}
        {!loading && error && <p>{error}</p>}
        {!loading && !error && products.length === 0 && (
          <p>No products found in this category.</p>
        )}
        {!loading && !error && products.length > 0 && (
          <Products products={products} searchQuery={searchQuery} />
        )}
      </section>
    </Layout>
  );
};

export default Computers;
