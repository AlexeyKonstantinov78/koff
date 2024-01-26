import { useDispatch, useSelector } from "react-redux";
import {
  addProductToCart,
  delProductToCart,
} from "../../store/cart/cart.slice";

export const AddToCartBtn = ({ className, id }) => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.cart);

  const handlerAddToCart = (event) => {
    event.preventDefault();
    const data = { productId: id, quantity: 1 };
    dispatch(addProductToCart(data));
  };

  const handlerDelToCart = (event) => {
    event.preventDefault();
    console.log(id);
    dispatch(delProductToCart(id));
  };

  return (
    <>
      {products.product?.id !== id ? (
        <button
          className={className}
          data-id={id}
          onClick={handlerAddToCart}
          aria-label="В корзину">
          В корзину
        </button>
      ) : (
        <button
          className={className}
          data-id={id}
          onClick={handlerDelToCart}
          aria-label="В корзину">
          Удалить из корзины
        </button>
      )}
    </>
  );
};
