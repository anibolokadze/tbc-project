import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./Icon.module.scss";

interface Props {
  icon?: any;
  onClick?: () => void;
  customIcon?: any;
  theme: string | undefined;
}

export default function Icon(iconprops: Props) {
  return (
    <div
      className={style.iconContainer}
      onClick={() => {
        iconprops.onClick && iconprops.onClick();
      }}
    >
      {iconprops.customIcon ? (
        iconprops.customIcon
      ) : (
        <FontAwesomeIcon
          className={iconprops.theme == "white" ? style.icon : style.iconDark}
          icon={iconprops.icon}
        />
      )}
    </div>
  );
}
