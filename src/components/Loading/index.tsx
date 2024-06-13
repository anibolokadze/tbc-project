import style from "./Loading.module.scss";

const Loading = () => {
  return (
    <div className={style.container}>
      <div className={style.product}>
        <div className={style.avatar}></div>
        <div className={style.line}></div>
        <div className={style.line}></div>
        <div className={style.line}></div>
        <div className={style.line}></div>
      </div>
    </div>
  );
};

export default Loading;
