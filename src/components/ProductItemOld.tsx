import Image from "next/image";
import Link from "next/link";
import { cardProps } from "../types";
import Button from "./Buttons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const ProductItem: React.FC<cardProps> = ({
  card: { id, title, description, thumbnail_link, price },
  handleClick,
}) => {
  return (
    <div className="bg-slate-200 flex flex-col gap-3 w-[250px] h-[380px] rounded-[10px] border border-blue-600 dark:border-light_blue overflow-hidden lg:w-[300px] lg:h-[490px] pb-3 dark:bg-slate-900">
      <Link href={`/products/${id}`}>
        <div className="flex flex-col gap-3 w-full h-[310px] lg:h-[390px]">
          <div className="w-full min-h-[200px] max-h-[200px] lg:min-h-[250px] lg:max-h-[250px]">
            <Image
              className="w-full h-full object-cover object-center"
              src={thumbnail_link}
              alt={title}
              width={1000}
              height={1000}
              priority
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
                {description.slice(0, 50)}...
              </div>
            </div>
          </div>
        </div>
      </Link>
      <div className="w-full px-[35px] lg:px-[50px] mt-auto">
        <Button
          onClick={() => {
            handleClick(id);
          }}
          text="add to cart"
          icon={faShoppingCart}
        />
      </div>
    </div>
  );
};

export default ProductItem;
