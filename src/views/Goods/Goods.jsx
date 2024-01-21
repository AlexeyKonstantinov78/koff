import { Container } from "../Container/Container";
import { CardItem } from "../../components/CardItem/CardItem";
import _ from "./Goods.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../store/products/products.slice";
import { Loader } from "../../components/Loader/Loader";
import { useLocation, useSearchParams } from "react-router-dom";

export const Goods = ({ data }) => {
  const dispatch = useDispatch();
  const [searchParam] = useSearchParams();
  const category = searchParam.get("category");
  const search = searchParam.get("search");
  const location = useLocation();
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
    if (accessToken) dispatch(fetchProducts({ category, search }));
  }, [dispatch, category, search]);

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
          </>
        ) : (
          <p>По вашему запросу ни чего не найдено</p>
        )}
      </Container>
    </section>
  );
};
