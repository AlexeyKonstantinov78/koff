import { Container } from "../Container/Container";
import { CardItem } from "../../components/CardItem/CardItem";
import _ from "./Goods.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../store/products/products.slice";
import { Loader } from "../../components/Loader/Loader";
import { useLocation, useSearchParams } from "react-router-dom";
import { Pagination } from "../../components/Pagination/Pagination";

export const Goods = ({ data }) => {
  const dispatch = useDispatch();
  const [searchParam] = useSearchParams();
  const location = useLocation();

  const category = searchParam.get("category");
  const search = searchParam.get("search");
  const page = searchParam.get("page");
  console.log("location: ", location);

  console.log(window.location.pathname);

  const {
    data: dataProducts,
    loading: loadingProducts,
    error: errorProducts,
    pagination,
  } = useSelector((state) => state.products);
  const { accessToken } = useSelector((state) => state.auth);

  useEffect(() => {
    if (accessToken) dispatch(fetchProducts({ category, search, page }));
  }, [dispatch, category, search, page]);

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
        {dataProducts.length ? (
          <>
            <ul className={_.list}>
              {dataProducts.map((item) => (
                <li key={item.article} className="_.catalog__item">
                  <CardItem {...item} />
                </li>
              ))}
            </ul>
            {pagination ? <Pagination pagination={pagination} /> : ""}
          </>
        ) : (
          <p>По вашему запросу ни чего не найдено</p>
        )}
      </Container>
    </section>
  );
};
