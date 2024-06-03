import Image from "next/image";
import star from "../../public/star.png";
import { useTranslation } from "react-i18next";
import { Product as ProductType } from "../types";

interface ProductProps {
  product: ProductType;
}

const Product: React.FC<ProductProps> = ({ product }) => {
  const discountedPrice = (
    product.price -
    (product.price * product.discountPercentage) / 100
  ).toFixed(1);

  const { t } = useTranslation();

  return (
    <div className="w-full h-96 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <article className="h-max mx-auto max-w-80 text-center relative overflow-hidden">
        <div className="">
          <Image
            src={product.thumbnail_link}
            alt={product.description}
            height={500}
            width={500}
            style={{
              width: "100%",
              height: "208px",
              margin: "0 auto",
              objectFit: "cover",
              background: "white",
            }}
          />
        </div>
        <section className="p-4">
          <h2 className="text-xl font-bold mb-2">{product.title}</h2>
          <div className="flex justify-around">
            <div className="flex items-end gap-x-1">
              <p className="text-3xl font-bold">${discountedPrice}</p>
              {product.discountPercentage && (
                <p className="text-sm text-gray-500 line-through">
                  ${product.price}
                </p>
              )}
            </div>
            <div className="flex items-center">
              <Image src={star} width={20} height={20} alt="star" />
              <p>{product.rating}</p>
            </div>
          </div>
        </section>
        <section className="pt-0">
          <button className="m-auto flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            {t("addToCart")}
          </button>
        </section>
      </article>
    </div>
  );
};

export default Product;
