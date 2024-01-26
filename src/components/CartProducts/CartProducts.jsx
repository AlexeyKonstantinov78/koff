import { useDispatch, useSelector } from "react-redux";
import _ from "./CartProducts.module.scss";
import { Loader } from "../Loader/Loader";
import { API_URL } from "../../const";
import { useEffect } from "react";
import { fetchCart } from "../../store/cart/cart.slice";

export const CartProducts = () => {
  const { products, loadingFetch, error } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  return (
    <>
      {loadingFetch && <Loader />}
      {error && <>Ошибка получение дынных из карзины : {error}</>}
      <ul className={_.products}>
        {!error && !loadingFetch && products.products?.length > 0 ? (
          products.products.map((product) => (
            <li key={product.article} className={_.product}>
              <img
                className={_.img}
                src={`${API_URL}${product.images[0]}`}
                alt={product.name}
              />
              <h3 className={_.titleProduct}>{product.name}</h3>
              <p className={_.price}>{product.price.toLocaleString()}&nbsp;₽</p>
              <p className={_.article}>арт.&nbsp;{product.article}</p>

              <div className={_.productControl}>
                <button className={_.productBtn}>-</button>
                <p className={_.productCount}>{product.quantity}</p>
                <button className={_.productBtn}>+</button>
              </div>
            </li>
          ))
        ) : (
          <h3>{!error && !loadingFetch && <>В корзине ни чего нет</>}</h3>
        )}
      </ul>
    </>
  );
};
