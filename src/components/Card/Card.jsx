/* eslint-disable max-len */
import { Container } from "../../views/Container/Container";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../store/product/product.slice";
import _ from "./Card.module.scss";
import { CircleLoader } from "react-spinners";
import { useParams } from "react-router-dom";
import { SwiperSlider } from "../SwiperSlider/SwiperSlider";

export const Card = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();

  const { data, loading, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, [dispatch]);

  if (loading) {
    return (
      <CircleLoader
        color="#36d7b7"
        cssOverride={{
          margin: "0 auto",
        }}
      />
    );
  }

  if (error) {
    return <Container>Ошибка получение данных о товаре: {error}</Container>;
  }

  return !loading && data.id && !error ? (
    <section className={_.product}>
      <Container className={_.product__container}>
        <h2 className={_.product__title}>{data.name}</h2>
        <div className={_.product__picture}>
          <SwiperSlider data={data} />
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
            <button className={_.product__btn} data-id={data.id}>
              В корзину
            </button>
            <button className={_.product__like} data-id={data.id}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16">
                <path
                  d="M8.41331 13.8733C8.18665 13.9533 7.81331 13.9533 7.58665 13.8733C5.65331 13.2133 1.33331 10.46 1.33331 5.79332C1.33331 3.73332 2.99331 2.06665 5.03998 2.06665C6.25331 2.06665 7.32665 2.65332 7.99998 3.55998C8.67331 2.65332 9.75331 2.06665 10.96 2.06665C13.0066 2.06665 14.6666 3.73332 14.6666 5.79332C14.6666 10.46 10.3466 13.2133 8.41331 13.8733Z"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"></path>
              </svg>
            </button>
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
