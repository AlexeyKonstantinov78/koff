import { Container } from "../Container/Container";
import { CardItem } from "../../components/CardItem/CardItem";
import _ from "./Goods.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../store/products/products.slice";
import { Loader } from "../../components/Loader/Loader";
import { useSearchParams } from "react-router-dom";

export const Goods = () => {
  const dispatch = useDispatch();
  const [searchParam] = useSearchParams();

  const category = searchParam.get("category");
  const search = searchParam.get("search");
  const page = searchParam.get("page");

  const { data, loading, error, pagination } = useSelector(
    (state) => state.products,
  );
  const { accessToken } = useSelector((state) => state.auth);

  useEffect(() => {
    if (accessToken) dispatch(fetchProducts({ category, search, page }));
  }, [dispatch, category, search, page]);

  return (
    <section className={_.goods}>
      <Container>
        {loading && <Loader />}
        {error && <p>Ошибка получение продукта: {error}</p>}
        <h2 className={`${_.title} visually-hidden`}>Список товаров</h2>
        {!loading && data.length ? (
          <CardItem data={data} pagination={pagination} />
        ) : (
          !loading && <h3>По вашему запросу ни чего не найдено</h3>
        )}
      </Container>
    </section>
  );
};
