import { useDispatch, useSelector } from "react-redux";
import _ from "./Favorites.module.scss";
import { useEffect } from "react";
import { Container } from "../Container/Container";
import { Loader } from "../../components/Loader/Loader";
import { CardItem } from "../../components/CardItem/CardItem";
import { fetchProducts } from "../../store/products/products.slice";
import { useSearchParams } from "react-router-dom";
import { Pagination } from "../../components/Pagination/Pagination";

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

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Container>Ошибка получение продукта: {error}</Container>;
  }

  return (
    <section className={_.goods}>
      <Container>
        <h2 className={`${_.title} visually-hidden`}>Список товаров</h2>
        {data.length && favoriteList.length ? (
          <>
            <ul className={_.list}>
              {data.map((item) => (
                <li key={item.article} className="_.catalog__item">
                  <CardItem {...item} />
                </li>
              ))}
            </ul>
            {pagination ? <Pagination pagination={pagination} /> : ""}
          </>
        ) : (
          <h3>В избранных ни чего нет</h3>
        )}
      </Container>
    </section>
  );
};
