import { declOfNum } from "../../helpers/declOfNum";
import _ from "./CartPlace.module.scss";

export const CartPlace = ({ loadingFetch, totalPrice, totalCount }) => {
  console.log();

  return (
    <>
      {!loadingFetch && (
        <div className={_.place}>
          <h3 className={_.subtitle}>Оформление</h3>
          <div className={_.placeInfo}>
            <p>
              {totalCount}{" "}
              {declOfNum(totalCount, ["товар", "товара", "товаров"])} на сумму:
            </p>
            <p>{totalPrice.toLocaleString()}&nbsp;₽</p>
          </div>
          <p className={_.placeDelivery}>Доставка 0 ₽</p>
          <button className={_.placeBtn} form="orderForm">
            Оформить заказ
          </button>
        </div>
      )}
    </>
  );
};
