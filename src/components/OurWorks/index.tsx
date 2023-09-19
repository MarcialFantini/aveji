import React from "react";
import style from "./style.module.css";
import room1 from "../../assets/works/room1.jpg";
import room2 from "../../assets/works/room2.jpg";
import room3 from "../../assets/works/room3.jpg";
import room4 from "../../assets/works/room4.jpg";
import room5 from "../../assets/works/room5.jpg";
import room6 from "../../assets/works/room6.jpg";
import room7 from "../../assets/works/room7.jpg";

function OurWorks() {
  return (
    <div className={style.containerAll}>
      <h2 className={style.title}>Our Works</h2>
      <div className={style.containerImgGrid}>
        <picture className={style.gridItem}>
          <img src={room1} alt="Room 1" />
        </picture>
        <picture className={style.gridItem}>
          <img src={room2} alt="Room 2" />
        </picture>
        <picture className={style.gridItem}>
          <img src={room3} alt="Room 3" />
        </picture>
        <picture className={style.gridItem}>
          <img src={room4} alt="Room 4" />
        </picture>
        <picture className={style.gridItem}>
          <img src={room5} alt="Room 5" />
        </picture>
        <picture className={style.gridItem}>
          <img src={room6} alt="Room 6" />
        </picture>
        <picture className={style.gridItem}>
          <img src={room7} alt="Room 7" />
        </picture>
      </div>
    </div>
  );
}

export default OurWorks;
