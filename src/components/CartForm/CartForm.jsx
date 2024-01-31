import { useDispatch, useSelector } from "react-redux";
import _ from "./CartForm.module.scss";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { submitCartForm } from "../../store/formCart/formCart.slice";

export const CartForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const orderStatus = useSelector((state) => state.formCart);

  useEffect(() => {
    if (orderStatus.success) {
      navigate(`/order/${orderStatus.orderId}`);
    }
  }, [orderStatus, navigate]);

  const onSubmit = (data) => {
    dispatch(submitCartForm(data));
  };

  return (
    <form className={_.form} id="orderForm" onSubmit={handleSubmit(onSubmit)}>
      <h3 className={_.subtitle}>Данные для доставки</h3>
      <fieldset className={_.fieldsetInput}>
        <label>
          <input
            className={_.input}
            type="text"
            {...register("name", { required: true })}
            placeholder="Фамилия Имя Отчество"
          />
          {errors.name && <p className={_.error}>Обязательное поле</p>}
        </label>
        <label>
          <input
            className={_.input}
            type="text"
            {...register("phone", { required: true })}
            placeholder="Телефон"
          />
          {errors.phone && <p className={_.error}>Обязательное поле</p>}
        </label>
        <label>
          <input
            className={_.input}
            type="email"
            {...register("email", { required: true })}
            placeholder="E-mail"
          />
          {errors.email && <p className={_.error}>Обязательное поле</p>}
        </label>
        <label>
          <input
            className={_.input}
            type="text"
            {...register("address", { required: true })}
            placeholder="Адрес доставки"
          />
          {errors.address && <p className={_.error}>Обязательное поле</p>}
        </label>
        <label>
          <textarea
            className={_.textarea}
            {...register("comments")}
            rows="10"
            placeholder="Комментарий к заказу"></textarea>
        </label>
      </fieldset>
      <fieldset className={_.fieldsetRadio}>
        <legend className={_.legend}>Доставка</legend>
        <label className={_.radio}>
          <input
            className={_.radioInput}
            type="radio"
            {...register("deliveryType", { required: true })}
            value="delivery"
          />
          Доставка
        </label>
        <label className={_.radio}>
          <input
            className={_.radioInput}
            type="radio"
            {...register("deliveryType", { required: true })}
            value="pickup"
          />
          Самовывоз
        </label>
        {errors.deliveryType && (
          <p className={_.error}>Выбирите тип доставки</p>
        )}
      </fieldset>
      <fieldset className={_.fieldsetRadio}>
        <legend className={_.legend}>Оплата</legend>
        <label className={_.radio}>
          <input
            className={_.radioInput}
            type="radio"
            {...register("paymentType", { required: true })}
            value="card"
          />
          Картой при получении
        </label>
        <label className={_.radio}>
          <input
            className={_.radioInput}
            type="radio"
            {...register("paymentType", { required: true })}
            value="cach"
          />
          Наличными при получении
        </label>
        {errors.paymentType && <p className={_.error}>Выбирите вид оплаты</p>}
      </fieldset>
    </form>
  );
};
