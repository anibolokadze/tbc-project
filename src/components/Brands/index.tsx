import React from "react";
import Image from "next/image";
import style from "./Brands.module.scss";

const brands = [
  { name: "Apple", src: "/icons8-apple-logo.svg" },
  { name: "HP", src: "/icons8-hp.svg" },
  { name: "Xiaomi", src: "/icons8-xiaomi.svg" },
];

export default function Brands() {
  return (
    <div className={style.container}>
      <h2 className={style.brandsTitle}>our brands</h2>
      <div className={style.brandsContainer}>
        {brands.map((brand, index) => (
          <div key={index}>
            <Image
              className={style.brand}
              src={brand.src}
              alt={brand.name}
              height={50}
              width={50}
            />
          </div>
        ))}
      </div>
    </div>
  );
}