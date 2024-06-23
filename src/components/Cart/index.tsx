"use client";
import React, { useState, useEffect } from "react";
import { useCart } from "../../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandHoldingDollar,
  faMinus,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import style from "./Cart.module.scss";
import Image from "next/image";
import Spin from "../Loading/Spin";
import Empty from "./Empty";
import { BASE_URL } from "../../../constants";

const Cart = () => {
  const {
    cartItems,
    totalCartPrice,
    deleteItem,
    increaseItem,
    decreaseItem,
    clearCart,
  } = useCart();

  const [, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const checkout = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${BASE_URL}/api/checkout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ products: cartItems }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `HTTP error! status: ${response.status} - ${errorData.error}`
        );
      }
      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
        clearCart();
      }
    } catch (error) {
      console.error("Error during checkout:", error);
    } finally {
      setLoading(false);
    }
  };

  if (initialLoading) {
    return <Spin />;
  }

  return (
    <>
      {cartItems.length === 0 ? (
        <Empty />
      ) : (
        <div className={style.cart}>
          <div className={style.products}>
            {cartItems.map((item) => (
              <div key={item.id} className={style.cart_item}>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={200}
                  height={200}
                />
                <div>
                  <h3>{item.title}</h3>
                  <div className={style.quantity}>
                    <h4>$ {item.price}</h4>
                    <div className={style.btn}>
                      <div className={style.btn_quantity}>
                        <button onClick={() => increaseItem(item.id)}>
                          <FontAwesomeIcon
                            icon={faPlus}
                            className={style.add}
                          />
                        </button>
                        <p>{item.quantity}</p>
                        <button onClick={() => decreaseItem(item.id)}>
                          <FontAwesomeIcon
                            icon={faMinus}
                            className={style.minus}
                          />
                        </button>
                      </div>

                      <button
                        onClick={() => deleteItem(item.id)}
                        className={style.delete}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={style.order}>
            <h2>Order Summary</h2>
            <h4>
              Total Price: <span>$ {totalCartPrice}</span>
            </h4>
            <button onClick={checkout}>
              <FontAwesomeIcon icon={faHandHoldingDollar} className="mr-2" />
              Checkout
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
