"use client";

import { useState, useEffect } from "react";
import Products from "../../components/Products";
import { getProducts } from "../../../api";
import Link from "next/link";

const Category = () => {
  const [categories, setCategories] = useState<{ [key: string]: any[] }>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const products = await getProducts();
        const groupedProducts: { [key: string]: any[] } = products.reduce(
          (acc: any, product: any) => {
            if (!acc[product.category]) {
              acc[product.category] = [];
            }
            if (acc[product.category].length < 4) {
              acc[product.category].push(product);
            }
            return acc;
          },
          {}
        );
        setCategories(groupedProducts);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to fetch products");
        setLoading(false);
      }
    };

    fetchAllProducts();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      {Object.keys(categories).map((category) => (
        <div key={category}>
          <h2>{category}</h2>
          {/* <Products searchQuery={searchQuery} products={categories[category]} /> */}
          <Products products={categories[category]} />
          <Link href={`/${encodeURIComponent(category)}`} passHref>
            See More
          </Link>
        </div>
      ))}
    </>
  );
};

export default Category;
