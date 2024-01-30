import { useDispatch, useSelector } from "react-redux";
import {
  addProductToCart,
  delProductToCart,
} from "../../store/cart/cart.slice";
import { Loader } from "../Loader/Loader";

export const AddToCartBtn = ({ className, id }) => {
  const dispatch = useDispatch();
  const { products, loadingRemove, loadingAdd } = useSelector(
    (state) => state.cart,
  );

  const isIdCart = products?.find((product) => product.id === id);

  const handlerAddToCart = (event) => {
    event.preventDefault();
    const data = { productId: id, quantity: 1 };
    dispatch(addProductToCart(data));
  };

  const handlerDelToCart = (event) => {
    event.preventDefault();
    dispatch(delProductToCart(id));
  };

  return (
    <>
      {!isIdCart ? (
        <>
          {loadingAdd ? (
            <Loader />
          ) : (
            <button
              className={className}
              data-id={id}
              onClick={handlerAddToCart}
              aria-label="В корзину">
              В корзину
            </button>
          )}
        </>
      ) : (
        <>
          {loadingRemove ? (
            <Loader />
          ) : (
            <button
              className={className}
              data-id={id}
              onClick={handlerDelToCart}
              aria-label="В корзину">
              Из корзины
            </button>
          )}
        </>
      )}
    </>
  );
};
