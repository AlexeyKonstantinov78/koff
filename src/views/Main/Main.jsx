import { useDispatch, useSelector } from "react-redux";
import { Catalog } from "../../components/Catalog/Catalog.jsx";
import { Goods } from "../../components/Goods/Goods.jsx";
import { useEffect } from "react";
import { fetchCategories } from "../../store/categories/categories.slice.js";
import { Container } from "../Container/Container.jsx";
import { fetchProducts } from "../../store/products/products.slice.js";

export const Main = () => {
  const dispatch = useDispatch();
  const {
    data: dataCategories,
    loading: loadingCategories,
    error: errorCategories,
  } = useSelector((state) => state.categories);

  const {
    data: dataProducts,
    loading: loadingProducts,
    error: errorProducts,
  } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
  }, [dispatch]);

  if (errorCategories) {
    return <Container>Ошибка получения категорий: {errorCategories}</Container>;
  }

  if (errorProducts) {
    return <Container>Ошибка получение продукта: {errorProducts}</Container>;
  }

  return (
    <main>
      {!loadingCategories && dataCategories ? (
        <Catalog data={dataCategories} />
      ) : (
        <Container>Загрузка...</Container>
      )}

      {!loadingProducts && dataProducts ? (
        <Goods data={dataProducts} />
      ) : (
        <Container>Загрузка...</Container>
      )}
    </main>
  );
};
