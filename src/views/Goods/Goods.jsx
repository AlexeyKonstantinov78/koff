import { Container } from "../Container/Container";
import { CardItem } from "../../components/CardItem/CardItem";
import _ from "./Goods.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../store/products/products.slice";
import { Loader } from "../../components/Loader/Loader";
import { useSearchParams } from "react-router-dom";
import { Pagination } from "../../components/Pagination/Pagination";

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
        {data.length ? (
          <>
            <ul className={_.list}>
              {data.map((item) => (
                <li key={item.article} className="_.catalog__item">
                  <CardItem {...item} />
                </li>
              ))}
            </ul>
            {pagination && pagination.totalProducts > pagination.limit ? (
              <Pagination pagination={pagination} />
            ) : (
              ""
            )}
          </>
        ) : (
          <p>По вашему запросу ни чего не найдено</p>
        )}
      </Container>
    </section>
  );
};
