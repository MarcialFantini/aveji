import style from "./style.module.css";

export const Navbar = () => {
  return (
    <div className={style.containerNav}>
      <nav className={style.nav}>
        {/* <picture><img src="" alt="" /></picture> */}
        <h2 className={style.title}>A</h2>
        <ul className={style.listLink}>
          <li className={style.link}> Home</li>
          <li className={style.link}>About</li>
          <li className={style.link}>Works</li>
        </ul>
      </nav>
    </div>
  );
};
