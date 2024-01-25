import { useDispatch } from "react-redux";
import { CartForm } from "../../components/CartForm/CartForm";
import { CartPlace } from "../../components/CartPlace/CartPlace";
import { CartProducts } from "../../components/CartProducts/CartProducts";
import { Container } from "../Container/Container";
import _ from "./Cart.module.scss";
import { fetchCart } from "../../store/cart/cart.slice";
import { useEffect } from "react";

export const Cart = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  return (
    <section className={_.cart}>
      <Container className={_.container}>
        <h2 className="_.title">Корзина</h2>
        <CartProducts />
        <CartForm />
        <CartPlace />
      </Container>
    </section>
  );
};
