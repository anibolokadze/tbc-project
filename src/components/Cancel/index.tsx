import React from "react";
import Layout from "../layout";
import style from "./Cancel.module.scss";
import Link from "next/link";
import Image from "next/image";

const page = () => {
  return (
    <Layout>
      <div className={style.container}>
        <div className={style.card}>
          <div className={style.textCenter}>
            <h3 className={`${style.heading} dark:text-white`}>
              Order Canceled!
            </h3>
            <p className={style.message}>
              We regret to inform you that your order has been canceled.
            </p>

            <div className={style.not_found}>
              <Image
                src={"/404-computer.svg"}
                width={300}
                height={300}
                alt="404"
              />
            </div>

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
