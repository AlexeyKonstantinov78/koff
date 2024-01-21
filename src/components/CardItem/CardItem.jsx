import _ from "./CardItem.module.scss";
import { API_URL } from "../../const";
import { Link } from "react-router-dom";
import { FavoriteBtn } from "../FavoriteBtn/FavoriteBtn";

export const CardItem = ({ id, name, images, price }) => (
  <article className={_.card}>
    <Link
      className={_.card__link + " " + _.card__link_img}
      to={`/product/${id}`}>
      <img className={_.card__img} src={`${API_URL}${images[0]}`} alt={name} />
    </Link>
    <div className={_.card__info}>
      <h3 className={_.card__title}>
        <Link className={_.card__link} to={`/product/${id}`}>
          {name}
        </Link>
      </h3>
      <p className={_.card__price}>{price.toLocaleString()}&nbsp;₽</p>
    </div>
    <button className={_.card__btn} data-id={id} aria-label="В корзину">
      В корзину
    </button>
    <FavoriteBtn className={_.card__favorite} id={id} />
  </article>
);
