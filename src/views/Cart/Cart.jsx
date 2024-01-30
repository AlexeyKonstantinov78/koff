import { useSelector } from "react-redux";
import { CartForm } from "../../components/CartForm/CartForm";
import { CartPlace } from "../../components/CartPlace/CartPlace";
import { CartProducts } from "../../components/CartProducts/CartProducts";
import { Container } from "../Container/Container";
import _ from "./Cart.module.scss";

export const Cart = () => {
  const { products, loadingFetch, totalPrice, totalCount, error } = useSelector(
    (state) => state.cart,
  );

  if (!totalCount && !loadingFetch) {
    return (
      <>
        <section className={_.cart}>
          <Container className={_.container}>
            <h2 className="_.title">Корзина пуста</h2>
          </Container>
        </section>
      </>
    );
  }

  return (
    <section className={_.cart}>
      <Container className={_.container}>
        <h2 className="_.title">Корзина</h2>
        <CartProducts
          products={products}
          loadingFetch={loadingFetch}
          error={error}
        />
        <CartForm />
        <CartPlace
          loadingFetch={loadingFetch}
          totalPrice={totalPrice}
          totalCount={totalCount}
        />
      </Container>
    </section>
  );
};
