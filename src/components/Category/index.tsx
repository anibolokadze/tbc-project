"use client";

import { useState, useEffect } from "react";
import Products from "../../components/Products";
import { getProducts } from "../../../api";
import Link from "next/link";
import { Product } from "../../types";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./Category.module.scss";

interface CategoryMap {
  [key: string]: Product[];
}

const Category = () => {
  const [categories, setCategories] = useState<CategoryMap>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const products: Product[] = await getProducts();
        const groupedProducts: CategoryMap = products.reduce(
          (acc: CategoryMap, product: Product) => {
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
      {Object.keys(categories).map((category, index) => (
        <div key={index}>
          <div className={style.category}>
            <Link
              href={`/${encodeURIComponent(category)}`}
              passHref
              className={style.title}
            >
              <h2>{category !== "smartphone" ? category : "smartphones"}</h2>
            </Link>

            <Link
              href={`/${encodeURIComponent(category)}`}
              passHref
              className={style.seemore}
            >
              see more
            </Link>
          </div>
          <Products products={categories[category]} />
        </div>
      ))}
    </>
  );
};

export default Category;
