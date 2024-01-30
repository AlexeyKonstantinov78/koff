import _ from "./CardItem.module.scss";
import { API_URL } from "../../const";
import { Link } from "react-router-dom";
import { FavoriteBtn } from "../FavoriteBtn/FavoriteBtn";
import { Pagination } from "../Pagination/Pagination";
import { AddToCartBtn } from "../AddToCartBtn/AddToCartBtn";

export const CardItem = ({ data, pagination }) => (
  <>
    <ul className={_.list}>
      {data.map((item) => (
        <li key={item.article} className="_.catalog__item">
          <article className={_.card}>
            <Link
              className={_.card__link + " " + _.card__link_img}
              to={`/product/${item.id}`}>
              <img
                className={_.card__img}
                src={`${API_URL}${item.images[0]}`}
                alt={item.name}
              />
            </Link>
            <div className={_.card__info}>
              <h3 className={_.card__title}>
                <Link className={_.card__link} to={`/product/${item.id}`}>
                  {item.name}
                </Link>
              </h3>
              <p className={_.card__price}>
                {item.price.toLocaleString()}&nbsp;₽
              </p>
            </div>
            <AddToCartBtn
              key={item.article}
              className={_.card__btn}
              id={item.id}
            />
            <FavoriteBtn className={_.card__favorite} id={item.id} />
          </article>
        </li>
      ))}
    </ul>
    {pagination && pagination.totalProducts >= pagination.limit ? (
      <Pagination pagination={pagination} />
    ) : (
      ""
    )}
  </>
);
