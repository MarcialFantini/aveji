import style from "./style.module.css";
import chair from "../../assets/header/chair.png";

export const HeaderTop = () => {
  return (
    <header className={style.headerTop}>
      <div className={style.textContainer}>
        <h1 className={style.title}> {"- AVJI -"}</h1>
        <h2 className={style.subTitle}>
          EXCLUSIVE AND NON-STANDARD HOME FURNITURE
        </h2>
        <button className={style.button}>CALL ME BACK</button>
      </div>
      <picture className={style.picture}>
        <img className={style.img} src={chair} alt="chair" />
      </picture>
    </header>
  );
};
