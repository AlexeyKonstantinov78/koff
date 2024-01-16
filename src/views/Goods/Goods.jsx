import { Container } from "../Container/Container";
import { CardItem } from "../../components/CardItem/CardItem";
import _ from "./Goods.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../store/products/products.slice";
import { CircleLoader } from "react-spinners";

export const Goods = ({ data }) => {
  const dispatch = useDispatch();

  const {
    data: dataProducts,
    loading: loadingProducts,
    error: errorProducts,
  } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loadingProducts) {
    return (
      <CircleLoader
        color="#36d7b7"
        cssOverride={{
          margin: "0 auto",
        }}
      />
    );
  }

  if (errorProducts) {
    return <Container>Ошибка получение продукта: {errorProducts}</Container>;
  }

  return (
    <section className={_.goods}>
      <Container>
        <h2 className={`${_.title} visually-hidden`}>Список товаров</h2>
        <ul className={_.list}>
          {dataProducts.map((item) => (
            <li key={item.article} className="_.catalog__item">
              <CardItem {...item} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};
