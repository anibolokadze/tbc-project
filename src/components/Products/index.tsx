"use client";
import { useEffect, useReducer } from "react";
import { Product } from "../../types";
import { useDebounce, useLocalStorage } from "../../hooks";
import { reducer } from "../../helpers";
import { useCartContext } from "../../context/CartContext";
import Card from "./Card";
import style from "./Products.module.scss";

export const revalidate = 0;

const Products = ({
  searchQuery = "",
  products = [],
}: {
  searchQuery?: string;
  products: Product[];
}) => {
  const [cachedValue, setCachedValue] = useLocalStorage("selectedProducts", []);
  const [selectedProducts] = useReducer(reducer, cachedValue);

  const { addItem } = useCartContext();

  useEffect(() => {
    setCachedValue(selectedProducts);
  }, [selectedProducts, setCachedValue]);

  let newCards = [...products];

  const debouncedSearchQuery = useDebounce(searchQuery, 1000);
  newCards = newCards.filter((product) =>
    product.title.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
  );

  const handleAddToCart = (card: Product) => {
    addItem({
      id: card.id,
      price: parseInt(card.price),
      title: card.title,
      image: card.thumbnail_link,
    });
  };

  return (
    <section>
      {newCards.length === 0 ? (
        <p>No products found</p>
      ) : (
        <div className={style.container}>
          {newCards.map((card) => (
            <Card
              key={card.id}
              card={card}
              handleClick={() => handleAddToCart(card)}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Products;
