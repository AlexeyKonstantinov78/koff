import { useDispatch, useSelector } from "react-redux";
import _ from "./Favorites.module.scss";
import { useEffect } from "react";
import { Container } from "../Container/Container";
import { Loader } from "../../components/Loader/Loader";
import { CardItem } from "../../components/CardItem/CardItem";
import { fetchProducts } from "../../store/products/products.slice";
import { useSearchParams } from "react-router-dom";

export const Favorites = () => {
  const dispatch = useDispatch();
  const [searchParam] = useSearchParams();

  const { accessToken } = useSelector((state) => state.auth);
  const { data, loading, error, pagination } = useSelector(
    (state) => state.products,
  );
  const { favoriteList } = useSelector((state) => state.favorite);

  const page = searchParam.get("page");

  useEffect(() => {
    if (accessToken && favoriteList.length > 0) {
      dispatch(fetchProducts({ list: favoriteList.join(","), page }));
    }
  }, [dispatch, favoriteList, page]);

  return (
    <section className={_.goods}>
      <Container>
        {loading && <Loader />}
        {error && <p>Ошибка получение продукта: {error}</p>}
        <h2 className={`${_.title} visually-hidden`}>Список товаров</h2>
        {!loading && data.length && favoriteList.length ? (
          <CardItem data={data} pagination={pagination} />
        ) : (
          <h3>В избранных ни чего нет</h3>
        )}
      </Container>
    </section>
  );
};
