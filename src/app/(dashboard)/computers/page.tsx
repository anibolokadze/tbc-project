"use client";
import { useState, useReducer, useEffect } from "react";
import { getProducts } from "../../../../api";

import ProductItem from "../../../components/ProductItem";
import { reducer } from "../../../helpers";
import { useLocalStorage } from "../../../hooks";
import { Product } from "../../../types";
import Layout from "../../../components/layout";

export const revalidate = 0;

const Computers = () => {
  const [cards, setCards] = useState<Product[]>([]);
  const [cachedValue, setCachedValue] = useLocalStorage("selectedProducts", []);
  const [selectedProducts, dispatch] = useReducer(reducer, cachedValue);
  const [, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getProducts("computers");
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

  const handleClick = (card: Product) => {
    dispatch({ type: "INCREMENT", payload: card });
  };

  return (
    <Layout>
      <section>
        {cards.length === 0 ? (
          <p className="text-blue-600 dark:text-light_blue text-[32px] text-center mt-[100px]">
            No products found in this category.
          </p>
        ) : (
          <div className="w-full py-5 px-5 max-w-[1400px] mx-auto my-10 lg:py-10 lg:px-0 ">
            <div className="flex flex-wrap justify-center mt-[25px] lg:mt-[65px] gap-[25px] lg:gap-10">
              {cards.map((card) => (
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
    </Layout>
  );
};

export default Computers;
