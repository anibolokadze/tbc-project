import { useState, useEffect, useReducer } from "react";
import { reducer } from "../helpers";
import { Product } from "../types";
import { useDebounce, useLocalStorage } from "../hooks";
import ProductItem from "./ProductItemOld";
// import Cart from "./Cart";
import { getProducts } from "../../api";
import { useCartContext } from "../context/CartContext";

export const revalidate = 0;

const Products = ({ searchQuery = "" }) => {
  const [cards, setCards] = useState<Product[]>([]);
  const [cachedValue, setCachedValue] = useLocalStorage("selectedProducts", []);
  const [selectedProducts] = useReducer(reducer, cachedValue);

  const [, setLoading] = useState(true);

  const { addItem } = useCartContext();

  useEffect(() => {
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

  const handleAddToCart = (card: Product) => {
    // dispatch({ type: "INCREMENT", payload: card });
    addItem({
      id: card.id,
      price: parseInt(card.price),
      title: card.title,
      image: card.thumbnail_link,
    });
  };

  // const selectedNumber = selectedProducts.reduce((acc, curr) => {
  //   return acc + curr.count;
  // }, 0);

  return (
    <section>
      {newCards.length === 0 ? (
        <p className="text-blue-600 dark:text-light_blue text-[32px] text-center mt-[100px]">
          Loading...
        </p>
      ) : (
        <div className="w-full py-5 px-5 max-w-[1400px] mx-auto lg:px-0 ">
          <div className="relative mb-[60px]"></div>
          <div className="flex flex-wrap justify-center mt-[25px] lg:mt-[65px] gap-[25px] lg:gap-10">
            {newCards.map((card) => (
              <ProductItem
                key={card.id}
                card={card}
                handleClick={() => handleAddToCart(card)}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;
