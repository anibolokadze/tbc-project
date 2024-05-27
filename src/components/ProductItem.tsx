import Image from "next/image";
import Link from "next/link";
import { cardProps } from "../types";

const ProductItem: React.FC<cardProps> = ({
  card: { id, title, description, thumbnail, price },
  handleClick,
}) => {
  return (
    <div className="bg-slate-200 flex flex-col gap-3 w-[250px] h-[380px] rounded-[10px] border border-blue-600 dark:border-light_blue overflow-hidden lg:w-[300px] lg:h-[490px] pb-3 dark:bg-slate-900">
      <Link href={`/products/${id}`}>
        <div className="flex flex-col gap-3 w-full h-[310px] lg:h-[390px]">
          <div className="w-full min-h-[200px] max-h-[200px] lg:min-h-[250px] lg:max-h-[250px]">
            <Image
              className="w-full h-full object-cover object-center"
              src={thumbnail}
              alt={title}
              width={1000}
              height={1000}
            />
          </div>
          <p className="text-[12px] leading-[18px] text-center text-gray-500">
            Price: ${price}
          </p>
          <div className="flex flex-col gap-3 px-[18px] lg:px-[22px]">
            <h5 className="text-[15px] leading-[25px] lg:text-lg text-center text-blue-600 dark:text-light_blue">
              {title}
            </h5>
            <div className="flex flex-col gap-3 justify-between items-center">
              <div className="w-full h-[70px] lg:h-[90px] text-[11px] lg:text-[13px] text-wrap">
                {description.slice(0,50)}...
              </div>
            </div>
          </div>
        </div>
      </Link>
      <div className="w-full px-[35px] lg:px-[50px] mt-auto">
        <button
          onClick={() => handleClick(id)}
          className="group w-full flex justify-center gap-3 items-center lg:py-2 border border-blue-600 dark:border-light_blue rounded-[10px] lg:rounded-[12px] hover:bg-blue-600 transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18.524"
            height="17.75"
            viewBox="0 0 18.524 17.75"
          >
            <g
              id="Icon_feather-shopping-cart"
              data-name="Icon feather-shopping-cart"
              transform="translate(-0.75 -0.75)"
            >
              <path
                className="stroke-primary dark:stroke-white fill-primary dark:fill-white "
                id="Path_29875"
                data-name="Path 29875"
                d="M13.548,30.774A.774.774,0,1,1,12.774,30,.774.774,0,0,1,13.548,30.774Z"
                transform="translate(-5.083 -13.798)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              ></path>
              <path
                className="stroke-primary dark:stroke-white fill-primary dark:fill-white "
                id="Path_29876"
                data-name="Path 29876"
                d="M30.048,30.774A.774.774,0,1,1,29.274,30,.774.774,0,0,1,30.048,30.774Z"
                transform="translate(-13.071 -13.798)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              ></path>
              <path
                className="stroke-primary dark:stroke-white fill-primary dark:fill-white "
                id="Path_29877"
                data-name="Path 29877"
                d="M1.5,1.5H4.6L6.669,11.861a1.548,1.548,0,0,0,1.548,1.246h7.521a1.548,1.548,0,0,0,1.548-1.246l1.238-6.492H5.369"
                transform="translate(0 0)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              ></path>
            </g>
          </svg>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
