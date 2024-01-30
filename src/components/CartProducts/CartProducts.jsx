import { useDispatch } from "react-redux";
import _ from "./CartProducts.module.scss";
import { Loader } from "../Loader/Loader";
import { API_URL } from "../../const";
import {
  delProductToCart,
  updateProductToCart,
} from "../../store/cart/cart.slice";

export const CartProducts = ({ products, loadingFetch, error }) => {
  const dispatch = useDispatch();

  const handleMinus = (id, quantity) => {
    if (quantity > 1) {
      dispatch(
        updateProductToCart({
          productId: id,
          quantity: quantity - 1,
        }),
      );
    } else {
      dispatch(delProductToCart(id));
    }
  };

  const handlePlus = (id, quantity) => {
    dispatch(
      updateProductToCart({
        productId: id,
        quantity: quantity + 1,
      }),
    );
  };

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
                <button
                  className={_.productBtn}
                  onClick={() => handleMinus(id, quantity)}>
                  -
                </button>
                <p className={_.productCount}>{quantity}</p>
                <button
                  className={_.productBtn}
                  onClick={() => handlePlus(id, quantity)}>
                  +
                </button>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
};
