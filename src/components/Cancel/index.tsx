import React from "react";
import Layout from "../layout";
import style from "./Cancel.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCancel } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const page = () => {
  return (
    <Layout>
      <div className={style.container}>
        <div className={style.card}>
          <FontAwesomeIcon icon={faCancel} className={style.icon} />
          <div className={style.textCenter}>
            <h3 className={style.heading}>Order Canceled!</h3>
            <p className={style.message}>
              We regret to inform you that your order has been canceled.
            </p>

            <div className={style.buttonContainer}>
              <Link href="/" className={style.button}>
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default page;
