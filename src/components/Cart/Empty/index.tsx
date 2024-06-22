import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import style from "./Empty.module.scss";

const index = () => {
  return (
    <div className={style.empty}>
      <div className={style.container}>
        <div className={style.card}>
          <div className={style.textCenter}>
            <FontAwesomeIcon icon={faBoxOpen} className={style.icon} />
            <h3 className={style.heading}>Your cart is empty!</h3>

            <div className={style.buttonContainer}>
              <Link href="/" className={style.button}>
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
