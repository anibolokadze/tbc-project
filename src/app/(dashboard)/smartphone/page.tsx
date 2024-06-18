// Computers.tsx

"use client";
import { useState, useEffect } from "react";
import Layout from "../../../components/layout";
import { getProducts } from "../../../../api";
import { Product } from "../../../types";
import Products from "../../../components/Products";
import Search from "../../../components/Search";
import SortProducts from "../../../components/SortProducts";
import SkeletonLoading from "../../../components/SkeletonLoading";
import style from "../../../components/SkeletonLoading/SkeletonLoading.module.scss";

const Computers = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<"ascending" | "descending">(
    "ascending"
  );

  useEffect(() => {
    setLoading(true);
    getProducts("smartphone")
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

  const sortProducts = (order: "ascending" | "descending") => {
    const sortedProducts = [...products];
    if (order === "ascending") {
      sortedProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else {
      sortedProducts.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    }
    setProducts(sortedProducts);
    setSortOrder(order);
  };

  return (
    <Layout>
      <Search
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        isSorted={false} // Adjust if necessary
        setIsSorted={() => {}} // Adjust if necessary
      />
      <SortProducts sortProducts={sortProducts} currentSortOrder={sortOrder} />
      <section>
        {loading && (
          <div className={style.height}>
            <SkeletonLoading />
            <SkeletonLoading />
          </div>
        )}
        {!loading && error && <p>{error}</p>}
        {!loading && !error && products.length === 0 && (
          <p className="text-blue-600 dark:text-light_blue text-[32px] text-center mt-[100px]">
            No products found in this category.
          </p>
        )}
        {!loading && !error && products.length > 0 && (
          <Products products={products} searchQuery={searchQuery} />
        )}
      </section>
    </Layout>
  );
};

export default Computers;
