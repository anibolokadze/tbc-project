import style from "./SkeletonLoading.module.scss";

const Loading = () => {
  return (
    <div className={style.container}>
      {[...Array(3)].map((_, index) => (
        <div key={index} className={style.product}>
          <div className={style.avatar}></div>
          <div className={style.line}></div>
          <div className={style.line}></div>
          <div className={style.line}></div>
          <div className={style.line}></div>
        </div>
      ))}
    </div>
  );
};

export default Loading;
