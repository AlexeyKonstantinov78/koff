import { Container } from "../../views/Container/Container";
import { CategoryItem } from "../CategoryItem/CategoryItem";
import _ from "./Catalog.module.scss";

export const Catalog = ({ data }) => (
  <nav className={_.catalog}>
    <Container>
      <h2 className={`${_.title} visually-hidden`}>Категории товаров</h2>
      <ul className={_.catalog__list}>
        {data.map((item, i) => (
          <li key={i} className="_.catalog__item">
            <CategoryItem title={item} />
          </li>
        ))}
      </ul>
    </Container>
  </nav>
);
