import { useSelector } from "react-redux";
import _ from "./CartProducts.module.scss";
import { Loader } from "../Loader/Loader";
import { Container } from "../../views/Container/Container";
import { API_URL } from "../../const";

export const CartProducts = () => {
  const { products, loadingFetch, error } = useSelector((state) => state.cart);

  if (loadingFetch) {
    return <Loader />;
  }

  if (error) {
    return <Container>Ошибка получение продукта: {error}</Container>;
  }
  return (
    <ul className={_.products}>
      {products.length > 0 ? (
        products.map((product) => (
          <li key={product.article} className={_.product}>
            <img
              className={_.img}
              src={`${API_URL}${product.images[0]}`}
              alt={product.name}
            />
            <h3 className={_.titleProduct}>{product.name}</h3>
            <p className={_.price}>{product.price.toLocaleString()}&nbsp;₽</p>
            <p className={_.article}>арт.&nbsp;{product.article}</p>

            <div className={_.productControl}>
              <button className={_.productBtn}>-</button>
              <p className={_.productCount}>{product.quantity}</p>
              <button className={_.productBtn}>+</button>
            </div>
          </li>
        ))
      ) : (
        <h3>В корзине ни чего нет</h3>
      )}
      {/* <li className={_.product}>
        <img
          className={_.img}
          src="https://koff-api.vercel.app/img//1hb442tf7pdk72uc.jpg"
          alt="диван"
        />
        <h3 className={_.titleProduct}>Диван</h3>
        <p className={_.price}>139&nbsp;258&nbsp;₽</p>
        <p className={_.article}>арт. 16955567334</p>

        <div className={_.productControl}>
          <button className={_.productBtn}>-</button>
          <p className={_.productCount}>3</p>
          <button className={_.productBtn}>+</button>
        </div>
      </li>
      <li className={_.product}>
        <img
          className={_.img}
          src="https://koff-api.vercel.app/img//1hb442tf7pdk72uc.jpg"
          alt="диван"
        />
        <h3 className={_.titleProduct}>Диван</h3>
        <p className={_.price}>139&nbsp;258&nbsp;₽</p>
        <p className={_.article}>арт. 16955567334</p>

        <div className={_.productControl}>
          <button className={_.productBtn}>-</button>
          <p className={_.productCount}>3</p>
          <button className={_.productBtn}>+</button>
        </div>
      </li> */}
    </ul>
  );
};
