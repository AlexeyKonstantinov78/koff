import { useDispatch, useSelector } from "react-redux";
import {
  addProductToCart,
  delProductToCart,
} from "../../store/cart/cart.slice";
import { useEffect, useState } from "react";

export const AddToCartBtn = ({ className, id }) => {
  const [isIdCart, setIsIdCart] = useState();

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

  useEffect(() => {
    products.product?.id !== id ? setIsIdCart(false) : setIsIdCart(true);

    if (Array.isArray(products.products)) {
      products.products.map((product) => {
        if (product.id === id) setIsIdCart(true);
      });
    }
  }, [dispatch, products]);

  return (
    <>
      {!isIdCart ? (
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
