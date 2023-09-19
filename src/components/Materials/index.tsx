import style from "./style.module.css";

import material1 from "../../assets/materials/material1.jpg";
import material2 from "../../assets/materials/material2.jpg";
import material3 from "../../assets/materials/material3.jpg";
import material4 from "../../assets/materials/material4.jpg";
import material5 from "../../assets/materials/material5.jpg";
import { useState } from "react";

function Materials() {
  const [count, setCount] = useState(0);

  const handlerPlus = () => {
    if (count + 1 <= 4) {
      setCount((prev) => prev + 1);
    }
  };

  const handlerLess = () => {
    if (count >= 1) {
      setCount((prev) => prev - 1);
    }
  };

  return (
    <div className={style.all}>
      <div className={style.containerAll}>
        <h2 className={style.title}>Materials</h2>
        <div className={style.containerMaterials}>
          <div className={style.containerText}>
            <h4 className={style.titleMaterials}>Wood</h4>
            <p className={style.subTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
            </p>
            <p className={style.text}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
              maxime facilis iure accusantium cum voluptatem omnis minus
              incidunt provident atque. Temporibus assumenda voluptatibus dicta
              nesciunt, placeat rem earum qui voluptatem.
            </p>

            <div className={style.buttons}>
              <button onClick={handlerLess}>{"<-"}</button>
              <p>{count + 1}/5</p>
              <button onClick={handlerPlus}>{"->"}</button>
            </div>
          </div>
          <div className={style.picture}>
            <div
              className={style.row}
              style={{ transform: `translate(${count * -20}%)` }}
            >
              <picture>
                <img src={material1} className={style.img} alt="" />
              </picture>
              <picture>
                <img src={material2} className={style.img} alt="" />
              </picture>
              <picture>
                <img src={material3} className={style.img} alt="" />
              </picture>
              <picture>
                <img src={material4} className={style.img} alt="" />
              </picture>
              <picture>
                <img src={material5} className={style.img} alt="" />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Materials;
