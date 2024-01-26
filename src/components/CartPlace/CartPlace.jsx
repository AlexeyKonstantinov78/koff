import { useSelector } from "react-redux";
import _ from "./CartPlace.module.scss";

export const CartPlace = () => {
  const { products, loadingFetch, totalPrice, totalCount } = useSelector(
    (state) => state.cart,
  );

  return (
    <>
      {!loadingFetch && products.products?.length > 0 && (
        <div className={_.place}>
          <h3 className={_.subtitle}>Оформление</h3>
          <div className={_.placeInfo}>
            <p>{totalCount} товара на сумму:</p>
            <p>{totalPrice.toLocaleString()}&nbsp;₽</p>
          </div>
          <p className={_.placeDelivery}>Доставка 0 ₽</p>
          <button className={_.placeBtn}>Оформить заказ</button>
        </div>
      )}
    </>
  );
};