import _ from "./CartForm.module.scss";

export const CartForm = () => (
  <form className={_.form}>
    <h3 className={_.subtitle}>Данные для доставки</h3>
    <fieldset className={_.fieldsetInput}>
      <input
        className={_.input}
        type="text"
        name="name"
        placeholder="Фамилия Имя Отчество"
      />
      <input
        className={_.input}
        type="text"
        name="phone"
        placeholder="Телефон"
      />
      <input
        className={_.input}
        type="email"
        name="email"
        placeholder="E-mail"
      />
      <input
        className={_.input}
        type="text"
        name="address"
        placeholder="Адрес доставки"
      />
      <textarea
        className={_.textarea}
        name="comments"
        cols="30"
        rows="10"
        placeholder="Комментарий к заказу"></textarea>
    </fieldset>
    <fieldset className={_.fieldsetRadio}>
      <legend className={_.legend}>Доставка</legend>
      <label className={_.radio}>
        <input
          className={_.radioInput}
          type="radio"
          name="deliveryType"
          value="delivery"
        />
        Доставка
      </label>
      <label className={_.radio}>
        <input
          className={_.radioInput}
          type="radio"
          name="deliveryType"
          value="pickup"
        />
        Самовывоз
      </label>
    </fieldset>
    <fieldset className={_.fieldsetRadio}>
      <legend className={_.legend}>Оплата</legend>
      <label className={_.radio}>
        <input
          className={_.radioInput}
          type="radio"
          name="paymentType"
          value="card"
        />
        Картой при получении
      </label>
      <label className={_.radio}>
        <input
          className={_.radioInput}
          type="radio"
          name="paymentType"
          value="cach"
        />
        Наличными при получении
      </label>
    </fieldset>
  </form>
);
