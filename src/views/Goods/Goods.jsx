import { Container } from "../Container/Container";
import { CardItem } from "../../components/CardItem/CardItem";
import _ from "./Goods.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../store/products/products.slice";
import { Loader } from "../../components/Loader/Loader";

export const Goods = ({ data }) => {
  const dispatch = useDispatch();

  const {
    data: dataProducts,
    loading: loadingProducts,
    error: errorProducts,
  } = useSelector((state) => state.products);
  const { accessToken } = useSelector((state) => state.auth);

  useEffect(() => {
    if (accessToken) dispatch(fetchProducts());
  }, [dispatch]);

  if (loadingProducts) {
    return <Loader />;
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
