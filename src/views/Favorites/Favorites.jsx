import { useDispatch, useSelector } from "react-redux";
import _ from "./Favorites.module.scss";
import { useEffect } from "react";
import { Container } from "../Container/Container";
import { Loader } from "../../components/Loader/Loader";
import { CardItem } from "../../components/CardItem/CardItem";
import { fetchProducts } from "../../store/products/products.slice";

export const Favorites = () => {
  const dispatch = useDispatch();

  const { accessToken } = useSelector((state) => state.auth);
  const { data, loading, error } = useSelector((state) => state.products);
  const { favoriteList } = useSelector((state) => state.favorite);

  useEffect(() => {
    if (accessToken && favoriteList.length > 0) {
      dispatch(fetchProducts({ list: favoriteList }));
    }
  }, [dispatch, favoriteList]);

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
          </>
        ) : (
          <h3>В избранных ни чего нет</h3>
        )}
      </Container>
    </section>
  );
};
