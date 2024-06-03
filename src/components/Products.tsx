"use client";
import { useState, useEffect, useReducer } from "react";
import { reducer } from "../helpers";
import { Product } from "../types";
import { useDebounce, useLocalStorage } from "../hooks";
import ProductItem from "./ProductItem";
import Cart from "./Cart";
import { getProducts } from "../../api";

const Products = ({ searchQuery = "" }) => {
  const [cards, setCards] = useState<Product[]>([]);
  const [cachedValue, setCachedValue] = useLocalStorage("selectedProducts", []);
  const [selectedProducts, dispatch] = useReducer(reducer, cachedValue);

  // const [products, setProducts] = useState([]);
  const [, setLoading] = useState(true);

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const response = await fetch("https://dummyjson.com/products");
    //     if (!response.ok) {
    //       throw new Error("Failed to fetch data");
    //     }
    //     const data = await response.json();
    //     setCards(data.products);
    //   } catch (error) {
    //     console.error("Error fetching data:", error);
    //   }
    // };

    // fetchData();

    const fetchProducts = async () => {
      try {
        const products = await getProducts();
        setCards(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    setCachedValue(selectedProducts);
  }, [selectedProducts, setCachedValue]);

  let newCards = [...cards];

  const debouncedSearchQuery = useDebounce(searchQuery, 1000);
  newCards = newCards.filter((product) =>
    product.title.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
  );

  const handleClick = (card: Product) => {
    dispatch({ type: "INCREMENT", payload: card });
  };

  const selectedNumber = selectedProducts.reduce((acc, curr) => {
    return acc + curr.count;
  }, 0);

  return (
    <section>
      {newCards.length === 0 ? (
        <p className="text-blue-600 dark:text-light_blue text-[32px] text-center mt-[100px]">
          Loading...
        </p>
      ) : (
        <div className="w-full py-5 px-5 max-w-[1400px] mx-auto my-10 lg:py-10 lg:px-0 ">
          <div className="relative mb-[60px]">
            <Cart
              className="group absolute top-0 right-[25px] lg:right-[40px] transform -translate-y-1/2 cursor-pointer "
              selectedNumber={selectedNumber}
            />
          </div>
          <div className="flex flex-wrap justify-center mt-[25px] lg:mt-[65px] gap-[25px] lg:gap-10">
            {newCards.map((card) => (
              <ProductItem
                key={card.id}
                card={card}
                handleClick={() => handleClick(card)}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;
