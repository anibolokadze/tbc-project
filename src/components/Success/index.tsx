import React from "react";
import Layout from "../layout";
import style from "./Success.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const page = () => {
  return (
    <Layout>
      <div className={style.container}>
        <div className={style.card}>
          <FontAwesomeIcon icon={faCheck} className={style.icon} />
          <div className={style.textCenter}>
            <h3 className={style.heading}>Payment Done!</h3>
            <p className={style.message}>
              Thank you for completing your secure online payment.
            </p>

            <div className={style.buttonContainer}>
              <Link href="/orders" className={style.button}>
                SEE YOUR ORDERS
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default page;
