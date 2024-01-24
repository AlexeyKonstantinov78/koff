import _ from "./CartPlace.module.scss";

export const CartPlace = () => (
  <div className={_.place}>
    <h3 className={_.subtitle}>Оформление</h3>
    <div className={_.placeInfo}>
      <p>4 товара на сумму:</p>
      <p>20 000 ₽</p>
    </div>
    <p className={_.placeDelivery}>Доставка 0 ₽</p>
    <button className={_.placeBtn}>Оформить заказ</button>
  </div>
);
