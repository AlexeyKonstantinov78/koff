import _ from "./CartProducts.module.scss";

export const CartProducts = () => {
  console.log();
  return (
    <ul className={_.products}>
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
      </li>
    </ul>
  );
};
