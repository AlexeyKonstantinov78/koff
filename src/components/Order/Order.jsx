import { Link, useParams } from "react-router-dom";
import _ from "./Order.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../views/Container/Container";
import { useEffect } from "react";
import { clearOrder, fetchOrder } from "../../store/order/order.slice";
import { Loader } from "../Loader/Loader";
import { fetchCart } from "../../store/cart/cart.slice";

export const Order = () => {
  const { orderId } = useParams();
  const dispatch = useDispatch();
  const { orderData, loading, error } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(fetchCart());
  });

  useEffect(() => {
    dispatch(fetchOrder(orderId));

    return () => {
      dispatch(clearOrder());
    };
  }, [dispatch]);

  if (error) {
    return (
      <section>
        <Container>
          <h3>Ошибка: {error} </h3>
        </Container>
      </section>
    );
  }

  return (
    <>
      {!orderData && loading && <Loader />}
      {!orderData && !loading && (
        <section>
          <Container>
            <h3>Заказ не найден</h3>
          </Container>
        </section>
      )}
      {orderData && !loading && (
        <section className={_.order}>
          <Container className={_.container}>
            <div className={_.content}>
              <div className={_.header}>
                <h2 className={_.title}>Заказ успешно размещен</h2>
                <p className={_.price}>
                  {orderData.totalPrice.toLocaleString()}&nbsp;₽
                </p>
              </div>

              <p className={_.number}>№{orderData.id}</p>

              <div className={_.tableWrapper}>
                <h3 className={_.tableTitle}>Данные доставки</h3>
                <table className={_.table}>
                  <tbody>
                    <tr className={_.row}>
                      <td className={_.field}>Получатель</td>
                      <td className={_.value}>{orderData.name}</td>
                    </tr>
                    <tr className={_.row}>
                      <td className={_.field}>Телефон</td>
                      <td className={_.value}>{orderData.phone}</td>
                    </tr>
                    <tr className={_.row}>
                      <td className={_.field}>E-mail</td>
                      <td className={_.value}>{orderData.email}</td>
                    </tr>
                    <tr className={_.row}>
                      <td className={_.field}>Адрес доставки</td>
                      <td className={_.value}>{orderData.address}</td>
                    </tr>
                    <tr className={_.row}>
                      <td className={_.field}>Способ оплаты</td>
                      <td className={_.value}>{orderData.paymentType}</td>
                    </tr>
                    <tr className={_.row}>
                      <td className={_.field}>Способ получения</td>
                      <td className={_.value}>{orderData.deliveryType}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <Link className={_.back} to="/">
                На главную
              </Link>
            </div>
          </Container>
        </section>
      )}
    </>
  );
};
