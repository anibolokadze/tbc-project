import Image from "next/image";
import Link from "next/link";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { cardProps } from "../../../types";

import style from "./Card.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card: React.FC<cardProps> = ({
  card: { id, title, thumbnail_link, price },
  handleClick,
}) => {
  return (
    <div className={style.card}>
      <Link href={`/products/${id}`}>
        <Image
          src={thumbnail_link}
          alt={title}
          width={1000}
          height={1000}
          priority
          className={style.image}
        />
      </Link>

      <h5 className={style.title}>{title}</h5>

      <div className={style.priceAndCart}>
        <p className={style.price}>${price}</p>
        <div
          className={style.iconContainer}
          onClick={() => {
            handleClick(id);
          }}
        >
          <FontAwesomeIcon className={style.plusButton} icon={faPlus} />
        </div>
      </div>
    </div>
  );
};

export default Card;
