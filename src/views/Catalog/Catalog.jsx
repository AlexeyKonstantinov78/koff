import { Container } from "../Container/Container";
import { CategoryItem } from "../../components/CategoryItem/CategoryItem";
import _ from "./Catalog.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCategories } from "../../store/categories/categories.slice";

export const Catalog = () => {
  const dispatch = useDispatch();
  const {
    data: dataCategories,
    loading: loadingCategories,
    error: errorCategories,
  } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (loadingCategories) {
    return <Container>Загрузка...</Container>;
  }

  if (errorCategories) {
    return <Container>Ошибка получения категорий: {errorCategories}</Container>;
  }

  return (
    <nav className={_.catalog}>
      <Container>
        <h2 className={`${_.title} visually-hidden`}>Категории товаров</h2>
        <ul className={_.catalog__list}>
          {dataCategories.map((item, i) => (
            <li key={i} className="_.catalog__item">
              <CategoryItem title={item} />
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
};
