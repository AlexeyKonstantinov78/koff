import { useDispatch } from "react-redux";
import _ from "./CartProducts.module.scss";
import { Loader } from "../Loader/Loader";
import { API_URL } from "../../const";
import { useEffect } from "react";
import { fetchCart, updateProductToCart } from "../../store/cart/cart.slice";

export const CartProducts = ({ products, loadingFetch, error }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCart());
    // const data = { productId: 6, quantity: 2 };
    // dispatch(updateProductToCart(data));
  }, [dispatch]);

  return (
    <>
      {loadingFetch && <Loader />}
      {error && <>Ошибка получение дынных из карзины : {error}</>}
      <ul className={_.products}>
        {!error &&
          !loadingFetch &&
          products?.length > 0 &&
          products.map(({ id, name, images, price, article, quantity }) => (
            <li key={id} className={_.product}>
              <img
                className={_.img}
                src={`${API_URL}${images[0]}`}
                alt={name}
              />
              <h3 className={_.titleProduct}>{name}</h3>
              <p className={_.price}>{price.toLocaleString()}&nbsp;₽</p>
              <p className={_.article}>арт.&nbsp;{article}</p>

              <div className={_.productControl}>
                <button className={_.productBtn}>-</button>
                <p className={_.productCount}>{quantity}</p>
                <button className={_.productBtn}>+</button>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
};
