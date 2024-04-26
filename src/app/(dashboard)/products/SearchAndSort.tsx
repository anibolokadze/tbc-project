"use client";

import { useState, useEffect, ChangeEvent } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { ProductProps } from "../../../types";
import Product from "../../../components/Product";

const ProductList: React.FC<ProductProps> = ({ products }) => {
  const { t } = useTranslation();

  const [searchTerm, setSearchTerm] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [sortedProducts, setSortedProducts] = useState(products);
  const [isAscendingOrder, setIsAscendingOrder] = useState(true);
  const [sorted, setSorted] = useState(false);

  useEffect(() => {
    const debounce = setTimeout(() => {
      setSearchTerm(inputValue);
    }, 500);

    return () => clearTimeout(debounce);
  }, [inputValue]);

  const filteredProducts = sortedProducts.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <form className="flex justify-center">
        <input
          className="px-3 py-2"
          type="search"
          id="search"
          name="search"
          placeholder={t("search")}
          autoComplete="off"
          value={inputValue}
          onChange={handleSearchInputChange}
        />
      </form>

      <button type="button" onClick={sortProducts} className="mx-10 my-10">
        {isAscendingOrder ? t("ascending") : t("descending")}
      </button>

      {sorted && (
        <button type="button" onClick={clearSorting}>
          {t("clear")}
        </button>
      )}

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <Link href={`/products/${product.id}`} key={product.id}>
            <Product
              key={product.id}
              id={product.id}
              title={product.title}
              description={product.description}
              images={product.images[0]}
              price={product.price}
              rating={product.rating}
              discountPercentage={product.discountPercentage}
            />
          </Link>
        ))}
      </section>
    </>
  );
};

export default ProductList;
