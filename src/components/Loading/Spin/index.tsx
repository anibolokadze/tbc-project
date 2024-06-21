import style from "./Spin.module.scss";

const Spin = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.loader}></div>
    </div>
  );
};

export default Spin;
