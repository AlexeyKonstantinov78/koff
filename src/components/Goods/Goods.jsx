import { Container } from "../../views/Container/Container";
import { CardItem } from "../CardItem/CardItem";
import _ from "./Goods.module.scss";

export const Goods = ({ data }) => (
  <section className={_.goods}>
    <Container>
      <h2 className={`${_.title} visually-hidden`}>Список товаров</h2>
      <ul className={_.list}>
        {data.map((item) => (
          <li key={item.article} className="_.catalog__item">
            <CardItem data={item} />
          </li>
        ))}
      </ul>
    </Container>
  </section>
);
