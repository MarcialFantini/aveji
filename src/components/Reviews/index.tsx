import style from "./style.module.css";

import person1 from "../../assets/persons/face-1461608_640.jpg";
import person2 from "../../assets/persons/girl-2306829_640.jpg";
import person3 from "../../assets/persons/portrait-322470_640.jpg";
function Reviews() {
  return (
    <div className={style.all}>
      <div className={style.reviews}>
        <h2 className={style.title}>Reviews</h2>

        <div className={style.cardContainer}>
          <div className={style.card}>
            <picture className={style.picture}>
              <img src={person1} alt="" className={style.img} />
            </picture>
            <p className={style.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              maxime pariatur minima perferendis aspernatur, ipsa facilis
              maiores alias aperiam exercitationem ea velit dicta mollitia quia
              distinctio. Quas officia expedita non?
            </p>
            <h2 className={style.name}>Dianna Lur</h2>
          </div>
          <div className={style.card}>
            <picture className={style.picture}>
              <img src={person2} alt="" className={style.img} />
            </picture>
            <p className={style.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              maxime pariatur minima perferendis aspernatur, ipsa facilis
              maiores alias aperiam exercitationem ea velit dicta mollitia quia
              distinctio. Quas officia expedita non?
            </p>
            <h2 className={style.name}>Dianna Lur</h2>
          </div>
          <div className={style.card}>
            <picture className={style.picture}>
              <img src={person3} alt="" className={style.img} />
            </picture>
            <p className={style.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              maxime pariatur minima perferendis aspernatur, ipsa facilis
              maiores alias aperiam exercitationem ea velit dicta mollitia quia
              distinctio. Quas officia expedita non?
            </p>
            <h2 className={style.name}>Dianna Lur</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
