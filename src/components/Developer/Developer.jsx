import _ from "./Developer.module.scss";

export const Developer = () => (
  <ul className={_.developers}>
    <li className={_.item}>
      Designer:&nbsp;
      <a
        className={_.link}
        href="https://t.me/Mrshmallowww"
        target="_blank"
        rel="noreferrer">
        Anastasia Ilina
      </a>
    </li>
    <li className={_.item}>
      Designer:&nbsp;
      <a
        className={_.link}
        href="https://t.me/Alex_kav"
        target="_blank"
        rel="noreferrer">
        Aleksey Konstantinov
      </a>
    </li>
  </ul>
);
