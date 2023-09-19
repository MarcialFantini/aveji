import style from "./style.module.css";

import clock from "../../assets/about/clock.png";
import star from "../../assets/about/star.png";
import tool from "../../assets/about/tool.png";
import handshake from "../../assets/about/handshake.png";

function AboutUs() {
  return (
    <div className={style.containerAboutUs}>
      <h2 className={style.title}>About US</h2>

      <div className={style.containerCards}>
        <div className={style.card}>
          <picture className={style.picture}>
            <img src={clock} alt="" className={style.img} />
          </picture>
          <div className={style.containerText}>
            <h4 className={style.titleCard}>We Carry Out installation</h4>
            <p className={style.textCard}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusantium ad facere non.
            </p>
          </div>
        </div>
        <div className={style.card}>
          <picture className={style.picture}>
            <img src={star} alt="" className={style.img} />
          </picture>
          <div className={style.containerText}>
            <h4 className={style.titleCard}>We Carry Out installation</h4>
            <p className={style.textCard}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusantium ad facere non.
            </p>
          </div>
        </div>
        <div className={style.card}>
          <picture className={style.picture}>
            <img src={tool} alt="" className={style.img} />
          </picture>
          <div className={style.containerText}>
            <h4 className={style.titleCard}>We Carry Out installation</h4>
            <p className={style.textCard}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusantium ad facere non.
            </p>
          </div>
        </div>
        <div className={style.card}>
          <picture className={style.picture}>
            <img src={handshake} alt="" className={style.img} />
          </picture>
          <div className={style.containerText}>
            <h4 className={style.titleCard}>We Carry Out installation</h4>
            <p className={style.textCard}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusantium ad facere non.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
