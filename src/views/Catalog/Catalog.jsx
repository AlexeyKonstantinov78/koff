import { Container } from "../Container/Container";
import { CategoryItem } from "../../components/CategoryItem/CategoryItem";
import _ from "./Catalog.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCategories } from "../../store/categories/categories.slice";
import { Loader } from "../../components/Loader/Loader";

export const Catalog = () => {
  const dispatch = useDispatch();
  const {
    data: dataCategories,
    loading: loadingCategories,
    error: errorCategories,
  } = useSelector((state) => state.categories);
  const { accessToken } = useSelector((state) => state.auth);

  useEffect(() => {
    if (accessToken) dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <nav className={_.catalog}>
      <Container>
        {loadingCategories && <Loader />}
        {errorCategories && (
          <p>Ошибка получения категорий: {errorCategories}</p>
        )}
        <h2 className={`${_.title} visually-hidden`}>Категории товаров</h2>
        <ul className={_.catalog__list}>
          {!loadingCategories &&
            dataCategories.map((item, i) => (
              <li key={i} className="_.catalog__item">
                <CategoryItem title={item} />
              </li>
            ))}
        </ul>
      </Container>
    </nav>
  );
};
