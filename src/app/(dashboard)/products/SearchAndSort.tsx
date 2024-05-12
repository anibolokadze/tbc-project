"use client";

import {
  useState,
  useEffect,
  ChangeEvent,
  //useReducer
} from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Product as ProductType, ProductProps } from "../../../types";
import Cart from "../../../components/Cart";
import Product from "../../../components/Product";
// import { useLocalStorage } from "../../../../hooks";

// interface SelectedProduct {
//   id: number;
//   count: number;
// }

// const initialState: SelectedProduct[] = [];

// type Action =
//   | { type: "INCREMENT"; payload: number }
//   | { type: "DECREMENT"; payload: number }
//   | { type: "RESET" };

// function reducer(state: SelectedProduct[], action: Action) {
//   switch (action.type) {
//     case "INCREMENT":
//       const selectedProductIdx = state.findIndex(
//         (p) => p.id === action.payload
//       );
//       if (selectedProductIdx === -1) {
//         return [...state, { id: action.payload!, count: 1 }];
//       }
//       const updatedState = [...state];
//       updatedState[selectedProductIdx].count++;
//       localStorage.setItem("selectedProducts", JSON.stringify(updatedState));
//       return updatedState;
//     case "DECREMENT":
//       const selectedProductIndex = state.findIndex(
//         (p) => p.id === action.payload
//       );
//       if (
//         selectedProductIndex === -1 ||
//         state[selectedProductIndex].count === 1
//       ) {
//         return state.filter((p) => p.id !== action.payload);
//       }
//       const newState = [...state];
//       newState[selectedProductIndex].count--;
//       localStorage.setItem("selectedProducts", JSON.stringify(newState));
//       return newState;
//     case "RESET":
//       localStorage.removeItem("selectedProducts");
//       return initialState;
//     default:
//       return state;
//   }
// }

const ProductList: React.FC<ProductProps> = ({
  products,
}: {
  products: ProductType[];
}) => {
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

  // const [selectedProducts, setSelectedProducts] = useState<SelectedProduct[]>(
  //   []
  // );

  // const [selectedProducts, dispatch] = useReducer(reducer, initialState);
  // const [selectedProducts, dispatch] = useReducer(
  //   reducer,
  //   JSON.parse(localStorage.getItem("selectedProducts") || "[]")
  // );

  // TODO
  // const [, setCachedValue] = useLocalStorage("selectedProducts");

  // useEffect(() => {
  //   setCachedValue(selectedProducts);
  // }, [selectedProducts, setCachedValue]);

  // const handleClick = (product: ProductType) => {
  //   dispatch({ type: "INCREMENT", payload: product.id ?? 0 });
  //   setCachedValue(selectedProducts);
  // };

  // useEffect(() => {
  //   localStorage.setItem("selectedProducts", JSON.stringify(selectedProducts));
  // }, [selectedProducts]);

  // const handleClick = (product: ProductType) => {
  //   dispatch({ type: "INCREMENT", payload: product.id ?? 0 });
  // };

  // const selectedNumber = selectedProducts.reduce((acc, curr) => {
  //   return acc + curr.count;
  // }, 0);
  // console.log("selected:", selectedProducts);

  return (
    <>
      {/* <form className="flex justify-center">
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
      </form> */}

      <form className="max-w-md mx-auto">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={t("search")}
            autoComplete="off"
            value={inputValue}
            onChange={handleSearchInputChange}
          />
        </div>
      </form>

      <button type="button" onClick={sortProducts} className="mx-10 my-10">
        {isAscendingOrder ? t("ascending") : t("descending")}
      </button>

      {sorted && (
        <button type="button" onClick={clearSorting}>
          {t("clear")}
        </button>
      )}

      <Cart
        className="w-8 h-8"
        selectedNumber={
          // selectedNumber
          1
        }
      />

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <Link href={`/products/${product.id}`} key={product.id}>
            <Product
              product={product}
              // handleClick={handleClick}
              handleClick={() => {
                return;
              }}
            />
          </Link>
        ))}
      </section>
    </>
  );
};

export default ProductList;
