/* eslint-disable max-len */
import { Container } from "../../views/Container/Container";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../store/product/product.slice";
import _ from "./Card.module.scss";
import { useParams } from "react-router-dom";
import { SwiperSlider } from "../SwiperSlider/SwiperSlider";
import { Loader } from "../Loader/Loader";
import { FavoriteBtn } from "../FavoriteBtn/FavoriteBtn";
import { AddToCartBtn } from "../AddToCartBtn/AddToCartBtn";

export const Card = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();

  const { data, loading, error } = useSelector((state) => state.product);
  const { accessToken } = useSelector((state) => state.auth);

  useEffect(() => {
    if (accessToken) dispatch(fetchProduct(productId));
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Container>Ошибка получение данных о товаре: {error}</Container>;
  }

  return !loading && data && !error ? (
    <section className={_.product}>
      <Container className={_.product__container}>
        <h2 className={_.product__title}>{data.name}</h2>
        <div className={_.product__picture}>
          <SwiperSlider {...data} />
        </div>
        <div className={_.product__info}>
          <p className={_.product__price}>
            {data.price.toLocaleString()}&nbsp;₽
          </p>
          <p className={_.product__article}>арт.&nbsp;{data.article}</p>
          <div className={_.product__characteristics}>
            <h3 className={_.product__characteristics_title}>
              Общие характеристики
            </h3>
            <table className={_.table + " " + _.product__characteristics_table}>
              <tbody>
                {data.characteristics.map((item, i) => (
                  <tr key={i} className={_.table__row}>
                    <td className={_.table__field}>{item[0]}</td>
                    <td className={_.table__value}>{item[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className={_.product__btns}>
            <AddToCartBtn className={_.product__btn} id={data.id} />
            <FavoriteBtn className={_.product__like} id={data.id} />
          </div>
        </div>
      </Container>
    </section>
  ) : (
    <section className={_.product}>
      <Container className={_.product__container}>
        <h2 className={_.product__title}>Нет сведений</h2>
      </Container>
    </section>
  );
};
