import { CartForm } from "../../components/CartForm/CartForm";
import { CartPlace } from "../../components/CartPlace/CartPlace";
import { CartProducts } from "../../components/CartProducts/CartProducts";
import { Container } from "../Container/Container";
import _ from "./Cart.module.scss";

export const Cart = () => (
  <section className={_.cart}>
    <Container className={_.container}>
      <h2 className="_.title">Корзина</h2>
      <CartProducts />
      <CartForm />
      <CartPlace />
    </Container>
  </section>
);
