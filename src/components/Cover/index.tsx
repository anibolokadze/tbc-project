import style from "./Cover.module.scss";
const cover = () => {
  return (
    <>
      <div className={style.coverWrapper}>
        <div className={style.cover}></div>
        <h1 className={style.intro}>welcome</h1>
      </div>
    </>
  );
};

export default cover;
