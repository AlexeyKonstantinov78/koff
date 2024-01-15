import { useDispatch, useSelector } from "react-redux";
import { Catalog } from "../../components/Catalog/Catalog.jsx";
import { Goods } from "../../components/Goods/Goods.jsx";
import { useEffect } from "react";
import { fetchCategories } from "../../store/categories/categories.slice.js";
import { Container } from "../Container/Container.jsx";

export const Main = () => {
  const dispatch = useDispatch();
  const {
    data: dataCategories,
    loading: loadingCategories,
    error: errorCategories,
  } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (errorCategories) {
    return <Container>Ошибка: {errorCategories}</Container>;
  }

  return (
    <main>
      {!loadingCategories && dataCategories ? (
        <Catalog data={dataCategories} />
      ) : (
        <Container>Загрузка...</Container>
      )}
      <Goods />
    </main>
  );
};
