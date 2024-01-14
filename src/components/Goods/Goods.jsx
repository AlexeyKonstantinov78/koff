import { Container } from "../../views/Container/Container";
import { CardItem } from "../CardItem/CardItem";
import _ from "./Goods.module.scss";

export const Goods = () => (
  <section className={_.goods}>
    <Container>
      <h2 className={`${_.title} visually-hidden`}>Список товаров</h2>
      <ul className={_.list}>
        <li>
          <CardItem />
        </li>
        <li>
          <CardItem />
        </li>
        <li>
          <CardItem />
        </li>
      </ul>
    </Container>
  </section>
);
