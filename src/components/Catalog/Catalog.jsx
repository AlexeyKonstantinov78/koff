import { Container } from "../../views/Container/Container";
import { CategoryItem } from "../CategoryItem/CategoryItem";
import _ from "./Catalog.module.scss";

export const Catalog = () => (
  <nav className={_.catalog}>
    <Container>
      <h2 className={`${_.title} visually-hidden`}>Категории товаров</h2>
      <ul className={_.catalog__list}>
        <li className="_.catalog__item">
          <CategoryItem title="Тумбы" />
        </li>
        <li className="_.catalog__item">
          <CategoryItem title="Полки" />
        </li>
        <li className="_.catalog__item">
          <CategoryItem title="Стулья" />
        </li>
        <li className="_.catalog__item">
          <CategoryItem title="Столы" />
        </li>
        <li className="_.catalog__item">
          <CategoryItem title="Пуфы и банкетки" />
        </li>
        <li className="_.catalog__item">
          <CategoryItem title="Кровати" />
        </li>
        <li className="_.catalog__item">
          <CategoryItem title="Диваны" />
        </li>
        <li className="_.catalog__item">
          <CategoryItem title="Стеллажи" />
        </li>
      </ul>
    </Container>
  </nav>
);
