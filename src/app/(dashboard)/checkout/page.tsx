"use client";
import { useEffect, useState, useReducer } from "react";
import { useLocalStorage } from "../../../hooks";
import { reducer } from "../../../helpers";
import { Product, SelectedProduct } from "../../../types";
import Image from "next/image";

const CheckoutPage = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  const [cardsData, setCachedValue] = useLocalStorage("selectedProducts", []);

  const [SelectedProducts, dispatch] = useReducer(reducer, cardsData);

  useEffect(() => {
    setCachedValue(SelectedProducts);
  }, [SelectedProducts, setCachedValue]);

  const handleQuantityChange = (
    action: "INCREMENT" | "DECREMENT" | "REMOVE",
    card: Product
  ) => {
    dispatch({ type: action, payload: card });
  };

  const handleProductRemove = (action: "RESET") => {
    dispatch({ type: action });
  };
  return (
    <div className="w-full py-5 px-5 max-w-[1400px] mx-auto my-10 lg:py-10 lg:px-0 ">
      {isMounted && cardsData.length > 0 ? (
        <div className="w-full lg:w-4/5 flex flex-col mt-[25px] lg:mt-[65px] gap-[25px] lg:gap-10 mx-auto">
          <table className="border-separate border-spacing-3">
            <thead>
              <tr className="[&>th]:text-start">
                <th>image</th>
                <th>title</th>
                <th>price</th>
                <th>quantity</th>
                <th className="flex justify-center">
                  <button onClick={() => handleProductRemove("RESET")}>
                    delete
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              {cardsData.map((product: SelectedProduct) => (
                <tr key={product.id}>
                  <td>
                    <div className="w-full max-h-[100px] lg:max-h-[150px] overflow-hidden">
                      {product.selectedCard.thumbnail_link && (
                        <Image
                          src={product.selectedCard.thumbnail_link}
                          alt={product.selectedCard.title}
                          width={100}
                          height={100}
                        />
                      )}
                    </div>
                  </td>
                  <td>{product.selectedCard.title}</td>

                  <td>$ {product.selectedCard.price}</td>
                  <td>
                    <div className="flex gap-3 items-center">
                      <button
                        className="text-3xl hover:text-orange transition-all duration-300 ease-in-out"
                        onClick={() =>
                          handleQuantityChange(
                            "DECREMENT",
                            product.selectedCard
                          )
                        }
                      >
                        -
                      </button>
                      <span className="text-2xl">{product.count}</span>
                      <button
                        className="text-3xl hover:text-orange transition-all duration-300 ease-in-out"
                        onClick={() =>
                          handleQuantityChange(
                            "INCREMENT",
                            product.selectedCard
                          )
                        }
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="text-center">
                    <button
                      className="text-3xl text-red-700  transition-all duration-300 ease-in-out"
                      onClick={() =>
                        handleQuantityChange("REMOVE", product.selectedCard)
                      }
                    >
                      delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="mt-[25px] lg:mt-[65px] flex justify-center text-[20px] lg:text-[25px]">
          empty
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
