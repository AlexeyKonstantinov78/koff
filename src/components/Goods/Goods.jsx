import { Container } from "../Container/Container";
import { CardItem } from "../../components/CardItem/CardItem";
import _ from "./Goods.module.scss";

export const Goods = ({ data }) => (
  <section className={_.goods}>
    <Container>
      <h2 className={`${_.title} visually-hidden`}>Список товаров</h2>
      <ul className={_.list}>
        {data.map((item) => (
          <li key={item.article} className="_.catalog__item">
            <CardItem {...item} />
          </li>
        ))}
      </ul>
    </Container>
  </section>
);
